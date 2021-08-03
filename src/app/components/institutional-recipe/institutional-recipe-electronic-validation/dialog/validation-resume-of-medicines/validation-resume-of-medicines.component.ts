import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
//services
import { ImageThemingService } from '@services/image-theming.service';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { AlertService } from '@services/alert.service';
import { WeeCompanyRestService, PreparePrescriptionRequestVO, WeeMedicineVO } from 'sif-api-client';
//rxjs
import { of } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
//material
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
//models
import { PrepareMedicineVO } from 'sif-api-client/lib/models/prepare-medicine-vo';
import { IRElectronicValidation, confirmOperationType, processStep, insurerNames } from '@ir/model/electronicValidation';

@Component({
  selector: 'app-validation-resume-of-medicines',
  templateUrl: './validation-resume-of-medicines.component.html',
  styleUrls: ['./validation-resume-of-medicines.component.scss']
})
export class ValidationResumeOfMedicinesComponent implements OnInit , OnDestroy{
  stepper3: string;
  $source: Observable<WeeMedicineVO[]>;
  userSelectedMedicines: PrepareMedicineVO[] = [];
  displayedColumns: string[] = ['medicine', 'qty', 'stock', 'presentation', 'eancode', 'duration', 'type', 'frecuency', 'dateTime', 'financer', 'client'];
  source: WeeMedicineVO[] = this.data.clientProfileData.medicines;
  dataSource = new MatTableDataSource<WeeMedicineVO>(this.source);
  selection = new SelectionModel<WeeMedicineVO>(true, [...this.data.clientSelectedMedicines.app]);
  medicineResumeTotal:number;
  subscription: Subscription;
  insurerNames = insurerNames;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
    private imageThemingService: ImageThemingService,
    public dialogRef: MatDialogRef<ValidationResumeOfMedicinesComponent>,
    private dialog: MatDialog,
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    private weCompanyService: WeeCompanyRestService,
    private alertService: AlertService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.setStepperImage();
    this.subscription =
    this.selection
      .changed
      .subscribe( data => {
        this.getCurrentSelection();
        this.data.clientSelectedMedicines.app = 
        data.source.selected;
    })
  }

  /**
   * trigger open dialog action for ValidationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openTokenConfirm(){
    this.getCurrentSelection();
    const data: PreparePrescriptionRequestVO = {
      determinant: this.data.determinantId,
      folio: this.data.ticket,
      medicines: this.userSelectedMedicines,
      operation: confirmOperationType.confirm
    }
    this.weCompanyService
      .proccessMedicinesUsingPOST(data)
      .subscribe(data =>{
        if(data.valid){
          this.data.step = processStep.token_confirm;
          this.data.clientProfileData.clientAmount = data.clientAmount;
          this.data.clientProfileData.financerAmount = data.financerAmount;
          this.data.clientProfileData.totalAmount = data.totalAmount;
          this.alertService.success(data.message);
          this.institutionalRecipeService
            .referenceDialog = this.dialogRef;
          this.institutionalRecipeService
            .openTokenConfirmDialog(this.data);
        }else{
          this.alertService.error(data.message);
        }
      })
  }

  /**
   * trigger open dialog action for ResumeOfMedicinesComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog(){
    this.getCurrentSelection();
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openPauseProcessDialog(this.data)
  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openCancelProcessDialog(){
    this.data.step = processStep.resume_of_medicines;
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openCancelProcessDialog(this.data)
  }

  /**
   * return model of currentn checked options
   * @author Walmart Mexico SIF Pharmacy project
  */
  getCurrentSelection(){
    this.userSelectedMedicines = [];
    this.data.clientSelectedMedicines.service = [];
    const setSelectedModel = (elem, index) =>{
      const { idNodo, idServicio } = elem;
      this.userSelectedMedicines.push({
        idNodo,
        idServicio
      });
    };
    of(this.selection.selected).pipe(
      map(data => {
        data.forEach(setSelectedModel)
      })
    ).subscribe();
    this.data.clientSelectedMedicines.service =
    this.userSelectedMedicines;
  }

  /**
   * set determinan theme settings
   * @author Walmart Mexico SIF Pharmacy project
  */
  setStepperImage() {
    const step3 = '3.png';
    this.stepper3 = this.imageThemingService.getElectronicValidationStepper(step3);
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
