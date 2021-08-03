import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InstitutionalRecipeReturnService } from '@services/institutional-recipe-return.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AlertService } from '@services/alert.service';
import { WeeCompanyRestService, RefundConfirmRequestVO } from 'sif-api-client';
import { IRReturn } from '@ir/model/return';

@Component({
  selector: 'app-return-reason',
  templateUrl: './return-reason.component.html',
  styleUrls: ['./return-reason.component.scss']
})
export class ReturnReasonComponent implements OnInit {
  returnReasonForm: FormGroup;
  reasons: any[] = [
    { 
      value: 'Error gramaje', 
      viewValue: 'Error gramaje' 
    },
    { 
      value: 'Error duración de tratamiento', 
      viewValue: 'Error duración de tratamiento' 
    },
    { 
      value: 'Medicamento no corresponde a lo indicado por el medico', 
      viewValue: 'Medicamento no corresponde a lo indicado por el medico' 
    },
    { 
      value: 'Cliente no requiere medicamento', 
      viewValue: 'Cliente no requiere medicamento' 
    },
    { 
      value: 'Otro', 
      viewValue: 'Otro' 
    }
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IRReturn,
    public dialogRef: MatDialogRef<ReturnReasonComponent>,
    private institutionalRecipeService: InstitutionalRecipeReturnService,
    private alertService: AlertService,
    private weCompanyService: WeeCompanyRestService
  ) { }

  ngOnInit(): void {
    this.returnReasonForm = new FormGroup({
      'reason': new FormControl(
        null,
        [Validators.required]),
      'comment': new FormControl(null)
    });
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for ReturnConfirmationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnConfirmationDialog() {
    const data: RefundConfirmRequestVO = {
      determinant: this.data.determinant,
      folio: this.data.clientProfileData.folio,
      ticket: this.data.ticket,
      refundComment: this.returnReasonForm.controls.comment.value,
      refundReason: this.returnReasonForm.controls.reason.value

    }
    this.weCompanyService
      .confirmRefundUsingPOST(data)
      .subscribe( data =>{
        if(data.valido){
          this.institutionalRecipeService
            .referenceDialog = this.dialogRef;
          this.institutionalRecipeService
            .openReturnConfirmationDialog();

        }else{
          this.alertService.error(data.message);
        }
      })
  }

}
