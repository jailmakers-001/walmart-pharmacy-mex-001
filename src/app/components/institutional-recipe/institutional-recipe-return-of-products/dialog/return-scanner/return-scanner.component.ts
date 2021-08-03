import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationScannerComponent } from '@ir/electronic-validation/dialog/validation-scanner/validation-scanner.component';
import { AlertService } from '@services/alert.service';
import { InstitutionalRecipeReturnService } from '@services/institutional-recipe-return.service';
import { WeeCompanyRestService, RefundPrescriptionRequestVO } from 'sif-api-client';
import { AppService } from '@services/app.service';
import { environment } from 'environment';
//models
import { scannerStatus } from '@ir/model/electronicValidation';
import { IRReturn } from '@ir/model/return';

@Component({
  selector: 'app-return-scanner',
  templateUrl: './return-scanner.component.html',
  styleUrls: ['./return-scanner.component.scss']
})
export class ReturnScannerComponent implements OnInit {

  stepper4: string;
  scannerStatus: string = scannerStatus.scanner;
  manualTicketForm: FormGroup;
  ticketControl: any;
  ticketConfirmControl: any;
  ticketScanned: string = '';
  returnData: IRReturn;
  ticketScannerMaxLength: number = environment.ticketScannerMaxLength;
  ticketScannerMinLength: number = environment.ticketScannerMinLength;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ValidationScannerComponent>,
    private dialog: MatDialog,
    private alertService: AlertService,
    private institutionalRecipeService: InstitutionalRecipeReturnService,
    private weCompanyService: WeeCompanyRestService,
    private appService: AppService,
  ) { }
  
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const { key } = event;
    if (key == "Enter") {
      if (this.scannerStatus === scannerStatus.scanner && this.ticketScanned.length){
        this.openReturnResumeOfMedicinesDialog(this.ticketScanned);
      }
      this.ticketScanned = '';
    } else {
      this.ticketScanned += key;
    }
  }
  ngOnInit(): void {
    this.manualTicketForm = new FormGroup({
      'ticket': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(this.ticketScannerMinLength),
          Validators.maxLength(this.ticketScannerMaxLength),
          Validators.pattern('^[0-9]*$')
        ]),
      'ticketConfirm': new FormControl(
        null,
        [ 
          Validators.required,
          Validators.minLength(this.ticketScannerMinLength),
          Validators.maxLength(this.ticketScannerMaxLength),
          Validators.pattern('^[0-9]*$')
         ]),
    });
    this.ticketControl = this.manualTicketForm.controls.ticket;
    this.ticketConfirmControl = this.manualTicketForm.controls.ticketConfirm;
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  toggleScannerStatus() {
    if (this.scannerStatus == scannerStatus.scanner) {
      this.scannerStatus = scannerStatus.manual;
    } else {
      this.scannerStatus = scannerStatus.scanner;
    }
  }

  /**
    * trigger open dialog action for ReturnResumeOfMedicinesComponent
    * @author Walmart Mexico SIF Pharmacy project
    */
  openReturnResumeOfMedicinesDialog(ticket:string) {
    const data: RefundPrescriptionRequestVO = {
      determinant: this.appService.store.storeNumber,
      ticket: ticket
    };
    this.weCompanyService
      .consultRefundUsingPOST(data)
      .subscribe( data => {
        if(data.valid){
          this.returnData = {
            clientProfileData: data,
            determinant: this.appService.store.storeNumber,
            ticket: ticket
          };
          this.institutionalRecipeService
            .referenceDialog = this.dialogRef;
          this.institutionalRecipeService
            .openReturnResumeOfMedicinesDialog(this.returnData);
        }else{
          this.alertService.error(data.message);
        }
      })
  }

  validateTicket() {
    const ticketErrorMessage = 'Los números del ticket ingresados no son iguales';
    if (this.ticketControl.value !== this.ticketConfirmControl.value) {
      this.alertService.error(ticketErrorMessage);
    } else {
      const ticket = this.manualTicketForm.controls.ticket.value;
      this.openReturnResumeOfMedicinesDialog(ticket);
    }
  }

}
