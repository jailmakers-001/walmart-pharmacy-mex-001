import { Component, Inject, HostListener } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PatRestService } from 'sif-api-client';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'environment';
import { PatViewListComponent } from '../pat-view-list/pat-view-list.component';
import { PatManualTicketComponent } from '../pat-manual-ticket/pat-manual-ticket.component';
import { AlertService } from 'src/app/services/alert.service';
import { PatService } from 'src/app/services/pat.service';

@Component({
  selector: 'app-pat-redemption-ticket',
  templateUrl: './pat-redemption-ticket.component.html',
  styleUrls: ['./pat-redemption-ticket.component.scss', '../pat.container.scss']
})
export class PatRedemptionTicketComponent {
  ticketScanned = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<PatRedemptionTicketComponent>,
    private dialog: MatDialog,
    private patService: PatService
  ){ 

  }
  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    const { key } = event;
    const { production } = environment;
    if (key == "Escape") {
      this.close()
    } else if (!production && key == "F10") {
      this.checkUpc("63088989933499499896");
    }
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const { key } = event;
    if (key == "Enter") {
      this.checkUpc(this.ticketScanned);
    } else {
      this.ticketScanned += key;
    }
  }
  
  checkUpc(ticketScanned) {
    this.patService.referenceDialog = this.dialogRef;
    this.patService.processTicket(ticketScanned, this.data);
    this.ticketScanned = '';
  }

  close() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.height = '500px';
    dialogConfig.width = '745px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      profileData: this.data.profileData
    }
    this.dialog.open(PatViewListComponent, dialogConfig)
    this.dialogRef.close()
  }

  manual() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '745px';
    dialogConfig.height = '500px';
    dialogConfig.data = {
      profileData: this.data.profileData,
      upc: this.data.upc,
      redemptionType: this.data.redemptionType
    };
    this.dialogRef.close();
    this.dialog.open(PatManualTicketComponent, dialogConfig);
  }  

  openPatViewListDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.height = '500px';
    dialogConfig.width = '745px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = this.data;
    this.dialog.open(PatViewListComponent, dialogConfig)
    this.dialogRef.close()
  }
}
