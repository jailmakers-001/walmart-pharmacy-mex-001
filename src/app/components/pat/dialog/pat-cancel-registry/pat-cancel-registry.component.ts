import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { FocusMonitor } from '@angular/cdk/a11y';
import { AlertService } from 'src/app/services/alert.service';
import { PatContainer } from '../../pat.container';
import { PatDataCaptureComponent } from '../../pat-capture-data/pat-capture-data.component';
import { PatValidationComponent } from '../../pat-validation/pat-validation.component';
import { PatRestService, PatClientVO, PatConfirmationRequestVO } from 'sif-api-client';
import { PatRegistryComponent } from '../../pat-registry/pat-registry.component';

@Component({
  selector: 'app-pat-cancel-registry',
  templateUrl: './pat-cancel-registry.component.html',
  styleUrls: ['./pat-cancel-registry.component.scss']
})
export class PatCancelRegistryComponent implements OnInit {

  dataCaptureFormClientData: PatClientVO;
  dataValidationFormData: PatConfirmationRequestVO;
  constructor( public dialogRef: MatDialogRef<any>,
               private dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private _focusMonitor: FocusMonitor,
               private patService: PatRestService,
               private alertService: AlertService ) {

                }

  ngOnInit(): void {
    this._focusMonitor.stopMonitoring(document.getElementById('c-cancel-registry'));
    this.dataCaptureFormClientData = this.data.captureFormData;
    this.dataValidationFormData = this.data.validationFormData;
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
  * validate current registry step to back to last dialog
  * @author Walmart Mexico SIF Pharmacy project
  */
  backToPreviousStep() {
    const step = this.data.step;
    switch (step) {
      case 'registry':
        this.backPatRegistryDialog();
        return;
      case 'validation':
        this.backPatValidationDialog();
        break;
      case 'dataCapture':
        this.backPatDataCaptureDialog();
        break;
    }
  }

  /**
   * cancel current registry
   * @author Walmart Mexico SIF Pharmacy project
  */
  cancelRegistry() {
    let phoneToCancel;
    const step = this.data.step;
    switch (step) {
      case 'registry':
        this.alertService.success('Cancelar: Registro cancelado con éxito');
        this.backPatContainerDialog();
        return;
      case 'validation':
        phoneToCancel = {
          phone: this.dataValidationFormData.phone
        }
        break;
      case 'dataCapture':
        phoneToCancel = {
          phone: this.dataCaptureFormClientData.phone
        }
        break;
    }

    this.patService.deleteClientDataUsingPOST( phoneToCancel ).subscribe(data => {
      if(data.valido){
        this.alertService.success(data.message)
      }else{
        this.alertService.error(data.message)
      }
    })
    this.backPatContainerDialog();
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
   * trigger open dialog action for DataCaptureComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  backPatDataCaptureDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      captureFormData: this.dataCaptureFormClientData
    }
    this.dialog.open(PatDataCaptureComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for PatValidationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  backPatValidationDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      validationFormData: this.dataValidationFormData
    }
    this.dialog.open(PatValidationComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for PatRegistryComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  backPatRegistryDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      validationFormData: this.dataValidationFormData
    }
    this.dialog.open(PatRegistryComponent, dialogConfig);
  }

}
