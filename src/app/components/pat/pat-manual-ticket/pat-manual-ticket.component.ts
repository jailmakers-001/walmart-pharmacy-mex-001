import { Component, Inject, OnInit, } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { PatRestService } from 'sif-api-client';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { PatViewListComponent } from '../pat-view-list/pat-view-list.component';
import { AlertService } from '../../../services/alert.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatService } from 'src/app/services/pat.service';
import { environment } from 'environment';
@Component({
  selector: 'app-pat-manual-ticket',
  templateUrl: './pat-manual-ticket.component.html',
  styleUrls: ['./pat-manual-ticket.component.scss', '../pat.container.scss']
})
export class PatManualTicketComponent implements OnInit{

  ticketForm: FormGroup;
  determinantLogoPat: string;
  assetsPat: string = 'assets/img/pat';
  assetName: string = 'logo';
  ticketScannerMaxLength: number = environment.ticketScannerMaxLength;
  ticketScannerMinLength: number = environment.ticketScannerMinLength;
  constructor(
    private app: AppService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<PatManualTicketComponent>,
    private alert: AlertService,
    private patService: PatService
  ) { }
  ngOnInit(): void {
    this.initForms();
    this.setCurrenTheme();
  }

  validate() {
    const ticket = this.ticketForm.controls.ticket.value;
    const ticketConfirm = this.ticketForm.controls.ticketConfirm.value;
    if (ticket !== ticketConfirm) {
      return this.alert.error('Los números del ticket ingresados no son iguales')
    }
    this.patService.referenceDialog = this.dialogRef;
    this.patService.processTicket(ticket, this.data);

  }
  
  close() {
    this.dialogRef.close()
    this.dialog.open(PatViewListComponent, { 
      panelClass: 'mat-full-container', 
      data: this.data, 
      height: '500px', 
      width: '745px', 
      autoFocus: false 
    })
  }

  openPatViewListDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.height = '500px';
    dialogConfig.width = '745px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = this.data;
    this.dialog.open(PatViewListComponent, dialogConfig)
    this.dialogRef.close()
  }

  setCurrenTheme(){
    let determinanFormat = this.app.getDeterminantFormat();
    let extension = 'svg';
    this.determinantLogoPat = `${this.assetsPat}/${determinanFormat}/${this.assetName}.${extension}`;
  }

  initForms(){
    const onlyNumbers = '^[0-9]*$';
    this.ticketForm = new FormGroup({
      'ticket': new FormControl(
        null,
        [Validators.required,
        Validators.minLength(this.ticketScannerMinLength),
        Validators.maxLength(this.ticketScannerMaxLength),
        Validators.pattern(onlyNumbers)]
      ),
      'ticketConfirm': new FormControl(
        null,
        [Validators.required,
        Validators.minLength(this.ticketScannerMinLength),
        Validators.maxLength(this.ticketScannerMaxLength),
        Validators.pattern(onlyNumbers)]
      )
    });
  }
}
