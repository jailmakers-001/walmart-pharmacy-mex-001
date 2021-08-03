import { Component, OnInit, Inject } from '@angular/core';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//models
import { IRElectronicValidation, processStep } from '@ir/model/electronicValidation';
import { WeeMedicineVO } from 'sif-api-client';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-process-incomplete',
  templateUrl: './process-incomplete.component.html',
  styleUrls: ['./process-incomplete.component.scss']
})
export class ProcessIncompleteComponent implements OnInit {

  displayedColumns = ['medicine', 'qty', 'presentation', 'eancode', 'duration', 'type', 'frecuency', 'dateTime', 'financer', 'client'];
  source: WeeMedicineVO[] = this.data.clientProfileData.medicines;
  dataSource = new MatTableDataSource<WeeMedicineVO>(this.source);
  constructor(
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
    public dialogRef: MatDialogRef<ProcessIncompleteComponent>,
  ) { }

  ngOnInit(): void {
  }

  /**
   * trigger open dialog action for ReturnScannerComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openValidationScannerDialog() {
    this.data.step = processStep.validation_scanner;
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openValidationScannerDialog(this.data);
  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog() {
    this.data.step = processStep.process_incomplete;
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

}