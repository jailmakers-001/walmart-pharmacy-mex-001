import { Component, Inject, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { PatRestService, PatClientVO, PatMedicineVO } from 'sif-api-client';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { PatRedemptionTicketComponent } from '../pat-redemption-ticket/pat-redemption-ticket.component';
import { AlertService } from 'src/app/services/alert.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PatDeleteProfileComponent } from '../pat-delete-profile/pat-delete-profile.component';

@Component({
  selector: 'app-pat-view-list',
  templateUrl: './pat-view-list.component.html',
  styleUrls: ['./pat-view-list.component.scss', '../pat.container.scss']
})
export class PatViewListComponent implements OnInit{
  edit = false;
  profileDataForm: FormGroup;
  avatarDeterminantPat:string;
  patAssets: string = 'assets/img/pat';
  assetName: string = 'avatar';
  constructor(
    private app: AppService,
    private pat: PatRestService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PatViewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private alert: AlertService) {
      
    }
  ngOnInit(): void {
    this.profileDataForm = new FormGroup({
      'firstNameField': new FormControl(
        { value: this.data.profileData.firstName, disabled: true },
        [Validators.required, Validators.maxLength(150)]),

      'lastNameField': new FormControl(
        { value: this.data.profileData.lastName, disabled: true },
        [Validators.required, Validators.maxLength(150)]),

      'motherLastNameField': new FormControl(
        { value: this.data.profileData.motherLastName, disabled: true },
        [Validators.required, Validators.maxLength(150)]),

      'birthYearField': new FormControl(
        this.data.profileData.birthYear,
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),

      'postalCodeField': new FormControl(
        this.data.profileData.postalCode,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),

      'phoneField': new FormControl(
        { value: this.data.profileData.phone, disabled: true },
        [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),

      'emailField': new FormControl(
        this.data.profileData.email,
        [Validators.email, Validators.maxLength(100)]),

      'checkField': new FormControl(
        this.data.profileData.receiveNotifications),
    });
    this.profileDataForm.markAsPristine();
    let determinanFormat = this.app.getDeterminantFormat();
    let extension = 'svg';
    this.avatarDeterminantPat = `${this.patAssets}/${determinanFormat}/${this.assetName}.${extension}`;
  }

  /**
   * get getProfileDataFormValues recent values (used if user modify form data values)
   * @author Walmart Mexico SIF Pharmacy project
  */
  getProfileDataFormValues(): PatClientVO {
    return {
      birthYear: this.profileDataForm.controls.birthYearField.value,
      email: this.profileDataForm.controls.emailField.value,
      firstName: this.profileDataForm.controls.firstNameField.value,
      lastName: this.profileDataForm.controls.lastNameField.value,
      motherLastName: this.profileDataForm.controls.motherLastNameField.value,
      phone: this.profileDataForm.controls.phoneField.value,
      postalCode: this.profileDataForm.controls.postalCodeField.value,
      store: this.app.store.storeNumber,
      receiveNotifications: this.profileDataForm.controls.checkField.value
    }
  }

  /**
   * send getProfileDataFormValues controls to untouched
   * @author Walmart Mexico SIF Pharmacy project
   * @docs https://stackoverflow.com/questions/40690371/set-form-to-pristine-without-clearing-data
  */
  setUntouchControls(){
    this.profileDataForm.controls.emailField.markAsUntouched;
    this.profileDataForm.controls.birthYearField.markAsUntouched;
    this.profileDataForm.controls.postalCodeField.markAsUntouched;
  }

  /**
   * send getProfileDataFormValues to service
   * @author Walmart Mexico SIF Pharmacy project
  */
  saveProfileData() {
    const data = this.getProfileDataFormValues();
    this.pat.updateClientDataUsingPOST( data )
        .subscribe(data => {
          if(data.valido){
            // this.edit = false;
            this.data.profileData.birthYear = this.profileDataForm.controls.birthYearField.value;
            this.alert.success(data.message);
            this.toggleEditProfile();
          }else{
            this.alert.error(data.message);
          }
    })
  }

  /**
   * toggle edit template
   * @author Walmart Mexico SIF Pharmacy project
  */
  toggleEditProfile(){
    if(this.edit){
      this.edit = false;
      this.profileDataForm.markAsPristine();
    }else{
      this.edit = true;
    }
  }

  /**
   * trigger open dialog action for PatRedemptionTicketComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openScan() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.data = {
      profileData: this.data.profileData,
      redemptionType: 'manual'
    };
    dialogConfig.width = '596px';
    dialogConfig.height = '300px';
    this.dialogRef.close()
    this.dialog.open(PatRedemptionTicketComponent, dialogConfig)
  }
  
  close() {
    this.dialogRef.close()
  }

  /**
   * trigger open dialog action for PatRedemptionTicketComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  redemption(medicine: PatMedicineVO) {
    if (medicine.avaliable && medicine.enabled){
      const controledMedicineMessage = 'Medicamento controlado. Esté producto requiere la receta medica con la cantidad solicitada.';
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'mat-full-container';
      dialogConfig.width = '596px';
      dialogConfig.height = '300px';
      dialogConfig.data = {
        profileData: this.data.profileData,
        upc: medicine.upc,
        redemptionType: 'exchange'
      };
      if (medicine.controled){
        this.alert.warning(controledMedicineMessage);
      }
      this.dialogRef.close();
      this.dialog.open(PatRedemptionTicketComponent, dialogConfig);
    }
  }

  /**
   * trigger open dialog action for PatDeleteProfileComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openDeleteProfileDataDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '744px';
    dialogConfig.height = '503px';
    dialogConfig.data = {
      profileData: this.data.profileData,
    };
    this.dialogRef.close();
    this.dialog.open(PatDeleteProfileComponent, dialogConfig);
  }
}
