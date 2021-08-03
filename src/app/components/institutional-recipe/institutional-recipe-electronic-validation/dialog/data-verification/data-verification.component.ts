import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRElectronicValidation, processStep } from '@ir/model/electronicValidation';
import { ImageThemingService } from '@services/image-theming.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { WeePrescriptionVO } from 'sif-api-client';

@Component({
  selector: 'app-data-verification',
  templateUrl: './data-verification.component.html',
  styleUrls: ['./data-verification.component.scss']
})
export class DataVerificationComponent implements OnInit {
  
  stepper2: string;
  dataVerificationForm: FormGroup;
  clientProfileData: WeePrescriptionVO;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
    private imageThemingService: ImageThemingService,
    public dialogRef: MatDialogRef<DataVerificationComponent>,
    private institutionalRecipeService: InstitutionalRecipeValidationService
  ) { }

  ngOnInit(): void {
    this.clientProfileData = this.data.clientProfileData;
    this.setStepperImage();
    this.dataVerificationForm = new FormGroup({
      'ticket': new FormControl( this.clientProfileData.folio ),
      'prescriptionDate': new FormControl( this.clientProfileData.prescriptionDate ),
      'ticketStatus': new FormControl( this.clientProfileData.status ),
      'funder': new FormControl( this.clientProfileData.financer ),
      'client': new FormControl( this.clientProfileData.client ),
      'policy': new FormControl( this.clientProfileData.policy ),
      'referenceNumber': new FormControl( this.clientProfileData.referenceNumber )
    });
  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog() {
    this.data.step = processStep.data_verification;
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openPauseProcessDialog(this.data)
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
   * set determinan theme settings
   * @author Walmart Mexico SIF Pharmacy project
  */
  setStepperImage() {
    const step2 = '2.png';
    this.stepper2 = this.imageThemingService.getElectronicValidationStepper(step2);
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

}
