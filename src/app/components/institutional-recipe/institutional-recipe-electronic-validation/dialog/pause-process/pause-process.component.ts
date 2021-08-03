import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ConsultTicketComponent } from '../consult-ticket/consult-ticket.component';
import { IRElectronicValidation, confirmOperationType, processStep } from '@ir/model/electronicValidation';
// services
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { WeeCompanyRestService, PreparePrescriptionRequestVO } from 'sif-api-client';
import { AlertService } from '@services/alert.service';

@Component({
  selector: 'app-pause-process',
  templateUrl: './pause-process.component.html',
  styleUrls: ['./pause-process.component.scss']
})
export class PauseProcessComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConsultTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    private weCompanyService: WeeCompanyRestService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  /**
   * validate current step to go back
   * @author Walmart Mexico SIF Pharmacy project
  */
  goBackPreviousDialog() {
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .goBackPreviousDialog(this.data);
  }

  /**
   * pause current process
   * @author Walmart Mexico SIF Pharmacy project
  */
  pause(){
    switch (this.data.step) {
      case processStep.resume_of_medicines:
        const data: PreparePrescriptionRequestVO = {
          determinant: this.data.determinantId,
          folio: this.data.ticket,
          medicines: this.data.clientSelectedMedicines.service,
          operation: confirmOperationType.pause
        }
        this.weCompanyService
          .proccessMedicinesUsingPOST(data)
          .subscribe(data => {
            if (data.valid) {
              this.alertService.success(data.message);
              this.closeDialog();
            } else {
              this.alertService.error(data.message);
            }
          })
        break;

      default:
        this.closeDialog();
        break;
    }
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

}
