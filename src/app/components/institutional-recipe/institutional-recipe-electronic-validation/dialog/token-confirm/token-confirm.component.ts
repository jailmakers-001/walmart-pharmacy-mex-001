import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//models
import { IRElectronicValidation, processStep } from '@ir/model/electronicValidation';
//services
import { ImageThemingService } from '@services/image-theming.service';
import { AlertService } from '@services/alert.service';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { WeeCompanyRestService, ConfirmSmsRequestVO, WeeSendSmsRequestVO } from 'sif-api-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-validation',
  templateUrl: './token-confirm.component.html',
  styleUrls: ['./token-confirm.component.scss']
})
export class TokenConfirmComponent implements OnInit, OnDestroy {

  stepper4: string;
  tokenForm: FormGroup;
  subscription: Subscription;
  tokenMaxLength: number = 10;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
    private imageThemingService: ImageThemingService,
    public dialogRef: MatDialogRef<TokenConfirmComponent>,
    private alertService: AlertService,
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    private weCompanyService: WeeCompanyRestService,
  ) { }

  ngOnDestroy(): void {
    this.subscription
      .unsubscribe();
  }

  ngOnInit(): void {
    this.tokenForm = new FormGroup({
      'token': new FormControl(
        this.data.token,
        [ 
          Validators.required,
          Validators.maxLength(this.tokenMaxLength),
          Validators.pattern('^[0-9]*$')
         ]),
    });
    this.setStepperImage();
    this.subscription =
    this.tokenForm
      .controls
      .token
      .valueChanges
      .subscribe(data => {
        this.data.token = data
    })
  }

  /**
   * confirm SMS token
   * @author Walmart Mexico SIF Pharmacy project
  */
  confirmToken() {
    const token = this.tokenForm.controls.token.value;
    const data: ConfirmSmsRequestVO = {
      code: token,
      determinant: this.data.determinantId,
      folio: this.data.clientProfileData.folio
    };
    this.weCompanyService
      .confirmSmsUsingPOST(data)
      .subscribe(data =>{
        if(data.valido){
          this.alertService.success(data.message);
          this.openValidationScannerDialog();
        }else{
          this.alertService.error(data.message);
        }
    })
  }

  /**
   * resend SMS token
   * @author Walmart Mexico SIF Pharmacy project
  */
  resendToken(){
    const data: WeeSendSmsRequestVO = {
      folio: this.data.clientProfileData.folio
    };
    this.weCompanyService
      .resendSmsUsingPOST(data)
      .subscribe( data =>{
        if(data.valido){
          this.alertService
            .success(data.message);
        }else{
          this.alertService
            .error(data.message);
        }
    })
  }

  /**
   * set determinan theme settings
   * @author Walmart Mexico SIF Pharmacy project
  */
  setStepperImage() {
    const step4 = '4.png';
    this.stepper4 = this.imageThemingService.getElectronicValidationStepper(step4);
  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog() {
    this.data.step = processStep.token_confirm;
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openPauseProcessDialog(this.data)
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for ValidationScannerComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openValidationScannerDialog(){
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openValidationScannerDialog(this.data);
  }

}
