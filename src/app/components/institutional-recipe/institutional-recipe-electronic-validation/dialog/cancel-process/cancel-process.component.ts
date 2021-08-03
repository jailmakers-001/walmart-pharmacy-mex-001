import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ConsultTicketComponent } from '../consult-ticket/consult-ticket.component';
import { IRElectronicValidation, processStep, confirmOperationType } from '@ir/model/electronicValidation';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { PreparePrescriptionRequestVO, WeeCompanyRestService } from 'sif-api-client';
import { AlertService } from '@services/alert.service';

@Component({
  selector: 'app-cancel-process',
  templateUrl: './cancel-process.component.html',
  styleUrls: ['./cancel-process.component.scss']
})
export class CancelProcessComponent implements OnInit {

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
   * trigger open dialog action for ResumeOfMedicinesComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openResumeOfMedicinesDialog() {
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openResumeOfMedicinesDialog(this.data);
  }

  /**
   * cancel current process
   * @author Walmart Mexico SIF Pharmacy project
  */
  cancel() {
    switch (this.data.step) {
      case processStep.resume_of_medicines:
        const data: PreparePrescriptionRequestVO = {
          determinant: this.data.determinantId,
          folio: this.data.ticket,
          medicines: this.data.clientSelectedMedicines.service,
          operation: confirmOperationType.cancel
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
