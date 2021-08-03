import { Injectable, Inject } from '@angular/core';
import { AppService } from './app.service';
import { PatRestService } from 'sif-api-client';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertService } from './alert.service';
import { PatViewListComponent } from '../components/pat/pat-view-list/pat-view-list.component';

@Injectable({
  providedIn: 'root'
})
export class PatService {
  data:any;
  referenceDialog: MatDialogRef<any>
  constructor(
    private app: AppService,
    private pat: PatRestService,
    private dialog: MatDialog,
    private alert: AlertService,
  ) { }

  processTicket(ticket: string, dialogData){
    this.data = dialogData;
    switch (this.data.redemptionType) {
      case 'manual':
        this.saveTicket(ticket);
        break;
      case 'exchange':
        this.exchange(ticket);
        break;
    }
  }

  // @docs https://cerr200128.mx.wal-mart.com:9443/sif-rest/swagger-ui.html#!/pat45rest/saveTicketUsingPOST
  saveTicket(ticket){
    const data = {
      phone: this.data.profileData.phone,
      store: this.app.store.storeNumber,
      ticket
    }
    this.pat
      .saveTicketUsingPOST(data)
      .subscribe(data => {
        if (data.valid) {
          this.alert.success(data.message);
          const phoneNumber = {
            phone: this.data.profileData.phone
          }
          this.pat
            .consultUsingPOST(phoneNumber)
            .subscribe(data => {
              this.data.profileData.medicines = data.data.medicines
              this.openPatViewListDialog();
              this.referenceDialog.close();
            })
        } else {
          this.alert.error(data.message);
        }
      })
  }

  exchange(ticket) {
    const data = {
      phone: this.data.profileData.phone,
      store: this.app.store.storeNumber,
      ticket,
      upc: this.data.upc
    }
    this.pat.exchangeUsingPOST(data).subscribe(data => {
      if (data.valido) {
        this.alert.success(data.message);
        const phoneNumber = {
          phone: this.data.profileData.phone
        }
        this.pat
          .consultUsingPOST(phoneNumber)
          .subscribe(data => {
            this.data.profileData.medicines = data.data.medicines
            this.openPatViewListDialog();
            this.referenceDialog.close();
          })
      } else {
        this.alert.error(data.message)
      }
    })
  }

  openPatViewListDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.height = '500px';
    dialogConfig.width = '745px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = this.data;
    this.dialog.open(PatViewListComponent, dialogConfig)
  }


}
