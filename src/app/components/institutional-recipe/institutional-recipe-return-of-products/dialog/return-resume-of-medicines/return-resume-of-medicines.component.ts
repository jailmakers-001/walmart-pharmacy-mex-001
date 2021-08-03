import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InstitutionalRecipeReturnService } from '@services/institutional-recipe-return.service';
import { IRReturn } from '@ir/model/return';
import { WeeMedicineVO } from 'sif-api-client/lib/models/wee-medicine-vo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-return-resume-of-mecicines',
  templateUrl: './return-resume-of-medicines.component.html',
  styleUrls: ['./return-resume-of-medicines.component.scss']
})
export class ReturnResumeOfMedicinesComponent implements OnInit {

  displayedColumns = ['medicine', 'qty', 'presentation', 'eancode', 'clientAmount', 'duration', 'type', 'frecuency', 'dateTime', 'financer', 'client'];
  source: WeeMedicineVO[] = this.data.clientProfileData.medicines;
  dataSource = new MatTableDataSource<WeeMedicineVO>(this.source);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IRReturn,
    public dialogRef: MatDialogRef<ReturnResumeOfMedicinesComponent>,
    private institutionalRecipeService: InstitutionalRecipeReturnService
  ) { }

  ngOnInit(): void {
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for ReturnResumeOfMedicinesComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnReasonDialog() {
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openReturnReasonDialog(this.data);
  }

}
