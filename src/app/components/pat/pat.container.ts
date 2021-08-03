import { Component, OnInit } from '@angular/core';
import { PatRestService, PatDataVO } from 'sif-api-client';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatViewListComponent } from './pat-view-list/pat-view-list.component';
import { PatDataCaptureComponent } from './pat-capture-data/pat-capture-data.component';
import { AlertService } from 'src/app/services/alert.service';
import { PatValidationComponent } from './pat-validation/pat-validation.component';
import { PatRegistryComponent } from './pat-registry/pat-registry.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-pat',
  templateUrl: './pat.container.html',
  styleUrls: ['./pat.container.scss']
})
export class PatContainer implements OnInit{

  containerForm: FormGroup;
  determinantLogoPat: string;
  assetsPat: string = 'assets/img/pat';
  assetName: string = 'logo';
  constructor( 
    private pat: PatRestService,
    private dialogRef: MatDialogRef<PatContainer>,
    private dialog: MatDialog,
    private appService: AppService,
    private alert: AlertService) {
    this.containerForm = new FormGroup({
      'phoneNumberField': new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
    this.setCurrentTheme();
  }

  /**
   * consult for phone number status
   * @author Walmart Mexico SIF Pharmacy project
  */
  consultPhoneNumberStatus() {
    let data = { 
      phone: this.containerForm.controls.phoneNumberField.value
    };
    this.pat.consultUsingPOST(data)
      .subscribe(data => {
        if ( !data.valido ) {
          this.alert.error('Teléfono no registrado');
        }
        if( data.valido ){
          switch(data.step){
            case 1:
              const phoneToVerify = { 
                phone: this.containerForm.controls.phoneNumberField.value
              };
              this.openPatValidationDialog(phoneToVerify);
            break;
            case 2:
              const captureFormData:PatDataVO = data.data;
              this.openPatDataCapture(captureFormData);
            break;
          }
        }
        if ( data.complete && data.valido ){
          const dialogConfig = new MatDialogConfig();
          dialogConfig.panelClass = 'mat-full-container';
          dialogConfig.height = '500px';
          dialogConfig.width = '745px';
          dialogConfig.autoFocus = false;
          dialogConfig.data = {
            profileData: data.data
          };
          this.dialog.open(PatViewListComponent, dialogConfig);
          this.dialogRef.close();
        }
      })
  }

  /**
   * trigger open dialog action for PatValidationComponent with data in Dialog
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatValidationDialog(phone) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      validationFormData: phone
    };
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    this.dialog.open(PatValidationComponent, dialogConfig);
    this.closeDialog();
  }

  /**
   * trigger open dialog action for DataCaptureComponent with data in Dialog
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatDataCapture(captureFormData: PatDataVO){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      captureFormData
    };
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    this.dialog.open(PatDataCaptureComponent, dialogConfig)
    this.closeDialog();
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for PatRegistryComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatRegistryDialog(){
    const dialogConfig = new MatDialogConfig();
    const phone = '';
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      validationFormData: phone
    };
    this.dialog.open( PatRegistryComponent, dialogConfig);
    this.closeDialog();
  }

  /**
   * set values for theme brand switching
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    let determinanFormat = this.appService.getDeterminantFormat();
    let extension = 'svg';
    this.determinantLogoPat = `${this.assetsPat}/${determinanFormat}/${this.assetName}.${extension}`;
  }
}
