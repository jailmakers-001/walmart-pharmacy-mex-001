import { Component, OnInit, Inject } from '@angular/core';
import { PatValidationComponent } from '../pat-validation/pat-validation.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-pat-terms-and-conditions',
  templateUrl: './pat-terms-and-conditions.component.html',
  styleUrls: ['./pat-terms-and-conditions.component.scss']
})
export class PatTermsAndConditionsComponent implements OnInit {
  patStepDeterminant: string;
  patAssets: string = 'assets/img/pat';
  patStepImage: string = 'validation';
  constructor(
    public dialogRef: MatDialogRef<any>,
    private dialog: MatDialog,
    private appService: AppService,
    @Inject(MAT_DIALOG_DATA) public data: any ) { 
      
    }

  ngOnInit(): void {
    this.setCurrentTheme();
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
      validationFormData: this.data.validationFormData
    }
    this.dialog.open(PatValidationComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for PatValidationComponent
   * set TRUE to accpet terms and conditions
   * @author Walmart Mexico SIF Pharmacy project
  */
  acceptAndBackPatValidationDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    this.data.validationFormData.check = true;
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    dialogConfig.data = {
      validationFormData: this.data.validationFormData
    }
    this.dialog.open(PatValidationComponent, dialogConfig);
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * set values for theme brand switching
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    let determinanFormat = this.appService.getDeterminantFormat();
    let extension = 'png';
    this.patStepDeterminant = `${this.patAssets}/${determinanFormat}/${this.patStepImage}.${extension}`;
  }
}
