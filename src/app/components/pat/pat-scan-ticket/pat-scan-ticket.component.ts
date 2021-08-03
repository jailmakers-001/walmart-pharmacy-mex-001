import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PatRestService } from 'sif-api-client';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { environment } from 'environment';
import { PatViewListComponent } from '../pat-view-list/pat-view-list.component';
import { PatManualTicketComponent } from '../pat-manual-ticket/pat-manual-ticket.component';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-pat-scan-ticket',
  templateUrl: './pat-scan-ticket.component.html',
  styleUrls: ['./pat-scan-ticket.component.scss', '../pat.container.scss']
})
export class PatScanTicketComponent {
  ticketScanned = ""
  constructor(
    private app: AppService,
    private pat: PatRestService,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<PatScanTicketComponent>,
    private dialog: MatDialog,
    private alert: AlertService,
  ) { }
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
  checkUpc(ticket) {
    const { storeNumber: store } = this.app.store;
    const { phone } = this.data
    const body = { phone, store, ticket }
    this.pat.saveTicketUsingPOST(body).subscribe(response => {
      const { message, valid: type } = response;
      this.alert.show(message,type)
      this.close()
    })
  }
  close() {
    this.dialogRef.close()
    this.dialog.open(PatViewListComponent, { panelClass: 'mat-full-container', data: this.data,height: '500px', width: '745px', autoFocus: false })
  }
  manual() {
    this.dialogRef.close();
    this.dialog.open(PatManualTicketComponent, { panelClass: 'mat-full-container', data: this.data, height: '500px', width: '745px'})
  }
}
