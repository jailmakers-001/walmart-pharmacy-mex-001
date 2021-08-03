import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatDataCaptureComponent } from '../pat-capture-data/pat-capture-data.component';
import { PatRegistryComponent } from '../pat-registry/pat-registry.component';
import { PatFinishLaterComponent } from '../dialog/pat-finish-later/pat-finish-later.component';
import { PatRestService, PatConfirmationRequestVO } from 'sif-api-client';
import { AlertService } from 'src/app/services/alert.service';
import { AppService } from 'src/app/services/app.service';
import { PatCancelRegistryComponent } from '../dialog/pat-cancel-registry/pat-cancel-registry.component';
// 3-party
import { differenceInHours, differenceInSeconds } from 'date-fns'
import { PatTermsAndConditionsComponent } from '../pat-terms-and-conditions/pat-terms-and-conditions.component';

interface messageResend{
  messagesSended: number,
  dateSended: number
}
@Component({
  selector: 'app-pat-validation',
  templateUrl: './pat-validation.component.html',
  styleUrls: ['./pat-validation.component.scss']
})
export class PatValidationComponent implements OnInit {

  validationForm: FormGroup;
  validationFormClientData: PatConfirmationRequestVO;
  smsCodeField: any;
  patStepDeterminant: string;
  patAssets: string = 'assets/img/pat';
  patStepImage: string = 'validation';
  constructor( 
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PatValidationComponent>,
    private patRestService: PatRestService,
    private alertService: AlertService,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any ){ 

    }

  ngOnInit(): void {
    this.validationFormClientData = this.data.validationFormData;
    this.validationForm = new FormGroup({
      'smsCodeField': new FormControl(
        this.validationFormClientData.code, 
        [Validators.required]),
        
      'checkField': new FormControl(
        this.validationFormClientData.check, 
        [Validators.requiredTrue]),
    });
    this.smsCodeField = this.validationForm.controls.smsCodeField;
    let determinanFormat = this.appService.getDeterminantFormat();
    let extension = 'png';
    this.patStepDeterminant = `${this.patAssets}/${determinanFormat}/${this.patStepImage}.${extension}`;
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  validateSmsCode(){
    let smsValidateData = {
      "code": this.validationForm.controls.smsCodeField.value,
      "phone": this.validationFormClientData.phone,
      "store": this.appService.store.storeNumber
    }
    this.patRestService.confirmClientUsingPOST( smsValidateData ).subscribe(data =>{    
      if( data.valido ){
        this.alertService.success( data.message );
        this.openPatDataCaptureDialog();
      }else{
        this.alertService.error( data.message );
      }
    })
  }

  /**
   * trigger open dialog action for PatDataCaptureComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatDataCaptureDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      captureFormData: {
        birthYear: '',
        email: '',
        firstName: '',
        lastName: '',
        motherLastName: '',
        phone: this.validationFormClientData.phone,
        postalCode: '',
        receiveNotifications: ''
      }
    };
    this.dialog.open(PatDataCaptureComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for PatRegistryComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatRegistryDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      validationFormData: this.getValidationFormValues()
    };
    dialogConfig.panelClass= 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    this.dialogRef.close();
    this.dialog.open(PatRegistryComponent, dialogConfig)
  }

  /**
   * get validationForm recent values (used if user modify form data values)
   * @author Walmart Mexico SIF Pharmacy project
  */
  getValidationFormValues(): PatConfirmationRequestVO{
    return {
      code: this.validationForm.controls.smsCodeField.value,
      phone: this.validationFormClientData.phone,
      store: this.appService.store.storeNumber
    }
  }

  /**
   * trigger open dialog action for PatFinishLaterComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatFinishLaterDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      step: 'validation',
      validationFormData: this.getValidationFormValues()
    };
    dialogConfig.width = '34.5rem';
    dialogConfig.height = '12.5rem';
    dialogConfig.autoFocus = false;
    this.dialog.open(PatFinishLaterComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for PatCancelRegistryComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatCancelRegistryDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      step: 'validation',
      validationFormData: this.getValidationFormValues()
    };
    dialogConfig.width = '34.5rem';
    dialogConfig.height = '12.5rem';
    dialogConfig.autoFocus = false;
    this.dialog.open(PatCancelRegistryComponent, dialogConfig);
  }

  resendSms(){
    const phoneToResend = {
      phone: this.validationFormClientData.phone
    };
    this.patRestService
      .sendSmsUsingPOST( phoneToResend )
        .subscribe(data =>{
          if(data.valido){
            this.alertService.success(data.message)
          }else{
            this.alertService.error(data.message)
          }
        });
  }

  /**
   * check if given phone number already exist in local storage
   * if not exist save phone to local storage
   * if exist validate for 24 hours elapsed to resend again
   * only can be sesend SMS 2 times each 24 hours
  * @author Walmart Mexico SIF Pharmacy project
  */
  checkInLocalStorageForResend(){
    const now = new Date();
    const timeToSend = 24; // 24 hours
    const maxNumberResend = 2; // 2 resend times
    const maxNumberResendMessage = 'Has alcanzado el número máximo de envíos. Inténtalo nuevamente en 24 hrs'; // 2 resend times
    const phoneNumber = this.validationFormClientData.phone;
    let phoneNumberExist = localStorage.getItem(phoneNumber);
    
    if (phoneNumberExist){
      let smsSended: messageResend = JSON.parse(phoneNumberExist);
      const timeElapsed = differenceInHours(now, smsSended.dateSended);
      if (smsSended.messagesSended === maxNumberResend){
        if (timeElapsed >= timeToSend){
          smsSended.messagesSended = 1;
          smsSended.dateSended = new Date().getTime();
          localStorage.setItem(phoneNumber, JSON.stringify(smsSended));
          this.resendSms();
        }else{
          this.alertService.error(maxNumberResendMessage);
        }
      } else if (smsSended.messagesSended < maxNumberResend){
        smsSended.messagesSended += 1;
        smsSended.dateSended = new Date().getTime();
        localStorage.setItem(phoneNumber, JSON.stringify(smsSended));
        this.resendSms();
      }
    }else{
      const smsSended = {
        messagesSended: 1,
        dateSended: new Date().getTime()
      }
      localStorage.setItem(phoneNumber, JSON.stringify(smsSended));
      this.resendSms();
    }
  }

  /**
   * trigger open dialog action for PatTermsAndConditionsComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatTermsAndConditionsDialog(){
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      step: 'validation',
      validationFormData: this.getValidationFormValues()
    };
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.autoFocus = false;
    this.dialog.open(PatTermsAndConditionsComponent, dialogConfig);
  }

}
