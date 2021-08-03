import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FocusMonitor } from '@angular/cdk/a11y';
import { PatRestService, PatDataVO, PatClientVO, PatConfirmationRequestVO } from 'sif-api-client';
import { AlertService } from 'src/app/services/alert.service';
import { PatDataCaptureComponent } from '../../pat-capture-data/pat-capture-data.component';
import { PatContainer } from '../../pat.container';
import { PatValidationComponent } from '../../pat-validation/pat-validation.component';

@Component({
  selector: 'app-pat-finish-later',
  templateUrl: './pat-finish-later.component.html',
  styleUrls: ['./pat-finish-later.component.scss']
})
export class PatFinishLaterComponent implements OnInit {

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
    // https://stackoverflow.com/questions/48953972/how-to-disable-or-overwrite-cdk-focused-in-angular-5
    this._focusMonitor.stopMonitoring(document.getElementById('c-finish-later'));
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
  backToPreviousStep(){
    const step = this.data.step;
    switch(step){
      case 'validation':
        this.backPatValidationDialog();
        break;
      case 'dataCapture':
        this.backPatDataCaptureDialog();
        break;
    }
  }

  /**
   * validate step and save registry to finish later
   * @author Walmart Mexico SIF Pharmacy project
  */
  finishLater() {
    const step = this.data.step;
    switch (step) {
      case 'validation':
        this.backPatContainerDialog();
        break;
      case 'dataCapture':
        this.saveFinishLater();
        break;
    }
  }

  /**
   * send registry to finish later service
   * @author Walmart Mexico SIF Pharmacy project
  */
  saveFinishLater(){ 
    this.dataCaptureFormClientData.complete = false;
    this.patService
      .saveClientUsingPOST( this.dataCaptureFormClientData )
        .subscribe(data =>{
         if(data.valido){
           this.backPatContainerDialog();
         }else{
           this.alertService.error(data.message);
         } 
        });
  }

  /**
   * trigger open dialog action for DataCaptureComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  backPatContainerDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    this.dialog.open( PatContainer, dialogConfig);
    this.alertService.success('Proceso detenido. El registro iniciará desde la última actualización');
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
    this.dialog.open( PatDataCaptureComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for DataCaptureComponent
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
    this.dialog.open( PatValidationComponent, dialogConfig);
  }

}