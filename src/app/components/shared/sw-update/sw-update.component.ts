import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sw-update',
  templateUrl: './sw-update.component.html',
  styleUrls: ['./sw-update.component.scss']
})
export class SwUpdateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }
  
  closeDialog() {
    this.dialogRef.close();
  }

}
