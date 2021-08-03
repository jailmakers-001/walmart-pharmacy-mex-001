import { Component, OnInit, Inject } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PatRestService, PatDataVO, PatClientVO } from 'sif-api-client';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatFinishLaterComponent } from '../dialog/pat-finish-later/pat-finish-later.component';
import { PatCancelRegistryComponent } from '../dialog/pat-cancel-registry/pat-cancel-registry.component';
import { PatContainer } from '../pat.container';
import { PatViewListComponent } from '../pat-view-list/pat-view-list.component';

@Component({
  selector: 'app-pat-capture-data',
  templateUrl: './pat-capture-data.component.html',
  styleUrls: ['./pat-capture-data.component.scss', '../pat.container.scss']
})
export class PatDataCaptureComponent implements OnInit{
  
  dataCaptureForm: FormGroup;
  dataCaptureFormClientData: PatDataVO;
  patStepDeterminant: string;
  patAssets: string = 'assets/img/pat';
  patStepImage: string = 'data-capture';
  constructor(
    private app: AppService,
    private pat: PatRestService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PatDataCaptureComponent>,
    private alertService: AlertService,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data) { 
    }
  ngOnInit(): void {
    this.dataCaptureFormClientData = this.data.captureFormData;
    this.dataCaptureForm = new FormGroup({
      'firstNameField': new FormControl(
        this.dataCaptureFormClientData.firstName, 
        [Validators.required, Validators.maxLength(150)]),
      
      'lastNameField': new FormControl(
        this.dataCaptureFormClientData.lastName, 
        [Validators.required, Validators.maxLength(150)]),
      
      'motherLastNameField': new FormControl(
        this.dataCaptureFormClientData.motherLastName, 
        [Validators.maxLength(150)]),
      
      'birthYearField': new FormControl(
        this.dataCaptureFormClientData.birthYear, 
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      
      'postalCodeField': new FormControl(
        this.dataCaptureFormClientData.postalCode, 
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      
      'phoneField': new FormControl(
        { value: this.dataCaptureFormClientData.phone, disabled: true }, 
        [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),

      'emailField': new FormControl(
        this.dataCaptureFormClientData.email, 
        [Validators.email, Validators.maxLength(100)]),

      'checkField': new FormControl(
        this.dataCaptureFormClientData.receiveNotifications),
    });
    let determinanFormat = this.appService.getDeterminantFormat();
    let extension = 'png';
    this.patStepDeterminant = `${this.patAssets}/${determinanFormat}/${this.patStepImage}.${extension}`;
  }

  /**
   * when form is valid send data to service
   * @author Walmart Mexico SIF Pharmacy project
  */
  clienteSave() {
    const registerData: PatClientVO = this.getCaptureDataFormValues();
    registerData.complete = true;
    this.pat
      .saveClientUsingPOST(registerData)
        .subscribe(data => {
          if(data.valido){
            this.closeDialog();
            this.alertService.success(data.message);
            this.openPatViewListDialog();
          }else{
            this.alertService.error(data.message)
          }
        })
  }

  /**
   * get dataCaptureForm recent values (used if user modify form data values)
   * @author Walmart Mexico SIF Pharmacy project
  */
  getCaptureDataFormValues(): PatClientVO {
    return {
      birthYear: this.dataCaptureForm.controls.birthYearField.value,
      email: this.dataCaptureForm.controls.emailField.value,
      firstName: this.dataCaptureForm.controls.firstNameField.value,
      lastName: this.dataCaptureForm.controls.lastNameField.value,
      motherLastName: this.dataCaptureForm.controls.motherLastNameField.value,
      phone: this.dataCaptureForm.controls.phoneField.value,
      postalCode: this.dataCaptureForm.controls.postalCodeField.value,
      store: this.app.store.storeNumber,
      receiveNotifications: this.dataCaptureForm.controls.checkField.value
    }
  }

  /**
    * trigger close dialog action
    * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for DataCaptureComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openDataCaptureDialog() {
    this.closeDialog();
    this.dialog.open(PatDataCaptureComponent, {
      panelClass: 'mat-full-container',
      width: '46.5rem',
      height: '31.4rem'
    })
  }

  /**
   * trigger open dialog action for PatFinishLaterComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatFinishLaterDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      step: 'dataCapture',
      captureFormData: this.getCaptureDataFormValues()
    };
    dialogConfig.width = '34.5rem';
    dialogConfig.height = '12.5rem';
    dialogConfig.autoFocus = false;
    this.closeDialog();
    this.dialog.open(PatFinishLaterComponent, dialogConfig)
  }
  
  /**
   * trigger open dialog action for PatCancelRegistryComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatCancelRegistryDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      step: 'dataCapture',
      captureFormData: this.getCaptureDataFormValues()
    };
    dialogConfig.width = '34.5rem';
    dialogConfig.height = '12.5rem';
    dialogConfig.autoFocus = false;
    this.closeDialog();
    this.dialog.open(PatCancelRegistryComponent, dialogConfig)
  }

  /**
   * trigger open dialog action for PatContainer
   * @author Walmart Mexico SIF Pharmacy project
  */
  backPatContainerDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    this.dialog.open(PatContainer, dialogConfig);
  }

  /**
   * trigger open dialog action for PatViewListComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatViewListDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.height = '500px';
    dialogConfig.width = '745px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      profileData: {
        birthYear: this.dataCaptureForm.controls.birthYearField.value,
        email: this.dataCaptureForm.controls.emailField.value,
        firstName: this.dataCaptureForm.controls.firstNameField.value,
        lastName: this.dataCaptureForm.controls.lastNameField.value,
        motherLastName: this.dataCaptureForm.controls.motherLastNameField.value,
        phone: this.dataCaptureForm.controls.phoneField.value,
        postalCode: this.dataCaptureForm.controls.postalCodeField.value,
        store: this.app.store.storeNumber,
        receiveNotifications: this.dataCaptureForm.controls.checkField.value,
        medicines: []
      }
    };
    this.dialog.open(PatViewListComponent, dialogConfig);
    this.dialogRef.close();
  }
  
}
