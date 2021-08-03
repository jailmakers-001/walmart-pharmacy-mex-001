import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatRestService } from 'sif-api-client';
import { AlertService } from 'src/app/services/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PatViewListComponent } from '../pat-view-list/pat-view-list.component';
import { PatContainer } from '../pat.container';

@Component({
  selector: 'app-pat-delete-profile',
  templateUrl: './pat-delete-profile.component.html',
  styleUrls: ['./pat-delete-profile.component.scss']
})
export class PatDeleteProfileComponent implements OnInit {

  deleteProfileForm: FormGroup;
  constructor(
    private patService: PatRestService,
    private alertService: AlertService,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<any>,
    private dialog: MatDialog ) { 

  }

  ngOnInit(): void {
    this.deleteProfileForm = new FormGroup({
      'confirmDeleteField': new FormControl(
        '',
        [Validators.required, this.confirmDelete]
    )});
  }

  deleteProfile(){
    let data = {
      phone: this.data.profileData.phone
    }
    this.patService.deleteClientDataUsingPOST( data ).subscribe(data =>{
      if(data.valido){
        this.alertService.success('Usuario borrado con éxito');
        this.backPatContainerDialog();
      }else{
        this.alertService.error( data.message )
      }
    });
  }

  confirmDelete(control: FormControl){
    // if (control.value?.toUpperCase() === 'BORRAR' ){
    if (control.value === 'BORRAR' ){
      return null;
    }else{
      return {
        confirmDelete: true
      }
    }
  }

  backToPatViewListDialog(){
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.height = '500px';
    dialogConfig.width = '745px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      profileData: this.data.profileData,
    };
    this.dialog.open(PatViewListComponent, dialogConfig);
  }

  /**
   * trigger open dialog action for PatContainer
   * @author Walmart Mexico SIF Pharmacy project
  */
  backPatContainerDialog() {
    this.closeDialog();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '46.5rem';
    dialogConfig.height = '31.4rem';
    this.dialog.open(PatContainer, dialogConfig);
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

}
