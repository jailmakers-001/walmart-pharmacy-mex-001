import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MedicineInformation } from 'sif-api-client';

@Component({
  selector: 'app-locate-view',
  templateUrl: './locate-view.component.html',
  styleUrls: ['./locate-view.component.scss']
})
export class LocateViewComponent {
  medicines: MedicineInformation[];
  name: string;
  description: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<LocateViewComponent>
  ) {
    ({ name: this.name, medicines: this.medicines, description: this.description } = data);
  }

}
