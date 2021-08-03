import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageThemingService } from '@services/image-theming.service';

@Component({
  selector: 'app-validation-confirmation',
  templateUrl: './validation-confirmation.component.html',
  styleUrls: ['./validation-confirmation.component.scss']
})
export class ValidationConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ValidationConfirmationComponent>,
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
