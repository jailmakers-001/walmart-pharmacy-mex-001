import { Injectable } from '@angular/core';
import { ReturnScannerComponent } from '@ir/return-of-products/dialog/return-scanner/return-scanner.component';
import { MatDialogConfig, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ReturnReasonComponent } from '@ir/return-of-products/dialog/return-reason/return-reason.component';
import { ReturnConfirmationComponent } from '@ir/return-of-products/dialog/return-confirmation/return-confirmation.component';
import { ReturnResumeOfMedicinesComponent } from '@ir/return-of-products/dialog/return-resume-of-medicines/return-resume-of-medicines.component';
import { IRReturn } from '@ir/model/return';

@Injectable({
  providedIn: 'root'
})
export class InstitutionalRecipeReturnService {

  referenceDialog: MatDialogRef<any>
  constructor(
    private dialog: MatDialog
  ) { }

  /**
   * trigger open dialog action for ReturnScannerComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnScannerDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '744px';
    dialogConfig.height = '297px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(ReturnScannerComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * trigger open dialog action for ReturnReasonComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnReasonDialog(data: IRReturn) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '744px';
    dialogConfig.height = '318px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = data;
    this.dialog.open(ReturnReasonComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
  * trigger open dialog action for ReturnConfirmationComponent
  * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnConfirmationDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '744px';
    dialogConfig.height = '319px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.closeReferencedDialog();
    this.dialog.open(ReturnConfirmationComponent, dialogConfig);
  }

  /**
  * trigger open dialog action for ReturnResumeOfMedicinesComponent
  * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnResumeOfMedicinesDialog(data: IRReturn) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '1128px';
    dialogConfig.height = '660px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = data;
    this.dialog.open(ReturnResumeOfMedicinesComponent, dialogConfig);
    this.closeReferencedDialog();
  }

  /**
   * close referenced dialog
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeReferencedDialog() {
    if (this.referenceDialog) this.referenceDialog.close();
  }
}
