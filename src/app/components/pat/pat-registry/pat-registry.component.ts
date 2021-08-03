import { Component, OnInit, Inject } from '@angular/core';
import { PatContainer } from '../pat.container';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatValidationComponent } from '../pat-validation/pat-validation.component';
import { PatRestService, PatPhoneVO, PatConfirmationRequestVO } from 'sif-api-client';
import { AlertService } from 'src/app/services/alert.service';
import { PatCancelRegistryComponent } from '../dialog/pat-cancel-registry/pat-cancel-registry.component';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-pat-registry',
  templateUrl: './pat-registry.component.html',
  styleUrls: ['./pat-registry.component.scss']
})
export class PatRegistryComponent implements OnInit {

  registryForm: FormGroup;
  registryFormClientData: PatConfirmationRequestVO;
  patStepDeterminant: string;
  determinantLogoPat: string;
  patAssets: string = 'assets/img/pat';
  patStepImage: string = 'registry';
  assetName: string = 'mini-logo';

  constructor( 
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,
    private pat: PatRestService,
    private alert: AlertService,
    public appService: AppService,
               @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    this.registryFormClientData = this.data.validationFormData;
    this.registryForm = new FormGroup({
      'phoneNumberField': new FormControl(
        this.registryFormClientData.phone, 
        [Validators.required])
    });
    let determinanFormat = this.appService.getDeterminantFormat();
    let extension1 = 'png';
    let extension2 = 'svg';
    this.patStepDeterminant = `${this.patAssets}/${determinanFormat}/${this.patStepImage}.${extension1}`;
    this.determinantLogoPat = `${this.patAssets}/${determinanFormat}/${this.assetName}.${extension2}`;

  }

  /**
   * validate phone number
   * @author Walmart Mexico SIF Pharmacy project
  */
  validatePhoneNumber() {
    let phoneNumber = {
      phone: this.registryForm.controls.phoneNumberField.value,
      store: this.appService.store.storeNumber
    }
    this.pat.savePhoneUsingPOST( phoneNumber ).subscribe( data =>{
      if( data.valido ){
        this.alert.success( data.message );
        this.openPatValidationDialog();
      }else{
        this.alert.error( data.message )
      }
    })
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for PatContainer
   * @author Walmart Mexico SIF Pharmacy project
  */
  backToPatContainerDialog() {
    this.dialogRef.close();
    this.dialog.open( PatContainer, {
      panelClass: 'mat-full-container',
      height: '500px',
      width: '745px'
    })
  }

  /**
   * trigger open dialog action for PatValidationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatValidationDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      validationFormData: this.getRegistryFormValues()
    };
    this.dialog.open( PatValidationComponent, dialogConfig);
  }

  /**
   * get validationForm recent values (used if user modify form data values)
   * @author Walmart Mexico SIF Pharmacy project
  */
  getRegistryFormValues(): PatPhoneVO{
    return {
      phone: this.registryForm.controls.phoneNumberField.value
    }
  }

  /**
   * trigger open dialog action for PatCancelRegistryComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPatCancelRegistryDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      step: 'registry',
      validationFormData: {
        phone: this.registryForm.controls.phoneNumberField.value
      }
    };
    dialogConfig.width = '34.5rem';
    dialogConfig.height = '12.5rem';
    this.dialog.open(PatCancelRegistryComponent, dialogConfig);
  }

}
