import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-return-confirmation',
  templateUrl: './return-confirmation.component.html',
  styleUrls: ['./return-confirmation.component.scss']
})
export class ReturnConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReturnConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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

}
