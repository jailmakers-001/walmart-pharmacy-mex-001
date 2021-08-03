import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConsultTicketComponent } from '@ir/electronic-validation/dialog/consult-ticket/consult-ticket.component';
import { DataVerificationComponent } from '@ir/electronic-validation/dialog/data-verification/data-verification.component';
import { IRElectronicValidation, processStepIncomplete, processStep } from '../components/institutional-recipe/model/electronicValidation';
import { ValidationResumeOfMedicinesComponent } from '@ir/electronic-validation/dialog/validation-resume-of-medicines/validation-resume-of-medicines.component';
import { TokenConfirmComponent } from '@ir/electronic-validation/dialog/token-confirm/token-confirm.component';
import { ValidationScannerComponent } from '@ir/electronic-validation/dialog/validation-scanner/validation-scanner.component';
import { ValidationConfirmationComponent } from '@ir/electronic-validation/dialog/validation-confirmation/validation-confirmation.component';
import { CancelProcessComponent } from '@ir/electronic-validation/dialog/cancel-process/cancel-process.component';
import { ProcessIncompleteComponent } from '@ir/electronic-validation/dialog/process-incomplete/process-incomplete.component';
import { PauseProcessComponent } from '@ir/electronic-validation/dialog/pause-process/pause-process.component';

@Injectable({
  providedIn: 'root'
})
export class InstitutionalRecipeValidationService {

  referenceDialog: MatDialogRef<any>
  constructor(
    private dialog: MatDialog
  ) { }

  /**
   * trigger open dialog action for ConsultTicketComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openConsultTicketDialog(data:IRElectronicValidation) {
    data.step = processStep.consult_ticket;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '58.5rem';
    dialogConfig.height = '29.3rem';
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(ConsultTicketComponent, dialogConfig);
    this.closeReferencedDialog();  
  }

  /**
   * trigger open dialog action for DataVerificationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openDataValidationDialog(data: IRElectronicValidation) {
    data.step = processStep.data_verification;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '66.9rem';
    dialogConfig.height = '500px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(DataVerificationComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * trigger open dialog action for ResumeOfMedicinesComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openResumeOfMedicinesDialog(data: IRElectronicValidation) {
    data.step = processStep.resume_of_medicines;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '80.6rem';
    dialogConfig.height = '660px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = data;
    this.dialog.open(ValidationResumeOfMedicinesComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * trigger open dialog action for ValidationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openTokenConfirmDialog(data: IRElectronicValidation) {
    data.step = processStep.token_confirm;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '66.9rem';
    dialogConfig.height = '26.9rem';
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(TokenConfirmComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * trigger open dialog action for ValidationScannerComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openValidationScannerDialog(data: IRElectronicValidation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '936px';
    dialogConfig.height = '395px';
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    this.dialog.open(ValidationScannerComponent, dialogConfig);
    this.closeReferencedDialog();

  }

  /**
   * trigger open dialog action for ValidationConfirmationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openValidationConfirmationDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '744px';
    dialogConfig.height = '319px';
    dialogConfig.autoFocus = false;
    this.dialog.open(ValidationConfirmationComponent, dialogConfig);
    this.closeReferencedDialog();

  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openCancelProcessDialog(data: IRElectronicValidation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '552px';
    dialogConfig.height = '214px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(CancelProcessComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * trigger open dialog action for PauseProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog(data: IRElectronicValidation) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '552px';
    dialogConfig.height = '214px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(PauseProcessComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * trigger open dialog action for ProcessIncompleteComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openIncompleteProcessDialog(data: IRElectronicValidation) {
    data.step = processStep.process_incomplete;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '1128px';
    dialogConfig.height = '654px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = data;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(ProcessIncompleteComponent, dialogConfig);
  }

  /**
   * validate current process step
   * @author Walmart Mexico SIF Pharmacy project
  */
  validateProcessStep(step:number, data:IRElectronicValidation){
    this.setSelectedMedicines(data);
    switch (step) {
      case processStepIncomplete.consult_ticket.id:
        this.openConsultTicketDialog(data);
        break;
      case processStepIncomplete.data_verification.id:
        this.openDataValidationDialog(data);
        break;
      case processStepIncomplete.resume_of_medicines.id:
        this.openResumeOfMedicinesDialog(data);
        break;
      case processStepIncomplete.token_confirm.id:
        this.openTokenConfirmDialog(data);
        break;
      case processStepIncomplete.validation_scanner.id:
        this.openIncompleteProcessDialog(data)
        break;

      default:
        this.openConsultTicketDialog(data);
        break;
    }
  }

  /**
   * validate current step to go back
   * @author Walmart Mexico SIF Pharmacy project
  */
  goBackPreviousDialog(data: IRElectronicValidation) {
    switch (data.step) {
      case processStep.process_incomplete:
        this.openIncompleteProcessDialog(data);
        break;
      case processStep.consult_ticket:
        this.openConsultTicketDialog(data);
        break;
      case processStep.data_verification:
        this.openDataValidationDialog(data);
        break;
      case processStep.resume_of_medicines:
        this.openResumeOfMedicinesDialog(data);
        break;
      case processStep.token_confirm:
        this.openTokenConfirmDialog(data)
        break;
      case processStep.validation_scanner:
        this.openValidationScannerDialog(data);
        break;
      default:
        this.openConsultTicketDialog(data);
        break;
    }
    this.closeReferencedDialog();
  }

  /**
   * close referenced dialog
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeReferencedDialog(){
    if (this.referenceDialog) this.referenceDialog.close();
  }

  /**
   * set models of user medicines selected to use in app
   * @author Walmart Mexico SIF Pharmacy project
  */
  setSelectedMedicines(data:IRElectronicValidation) {
    data.clientSelectedMedicines.app = [];
    const currentMedicines = data.clientProfileData.medicines;
    data.clientProfileData.selected.forEach(element => {
      if (element.checked){
        data.clientSelectedMedicines.app.push(currentMedicines[element.id]);
      }
    });
  }

  
}
