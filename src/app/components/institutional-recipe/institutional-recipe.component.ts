import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//component
import { InstitutionalRecipeDetailsAxaComponent } from './institutional-recipe-details-axa/institutional-recipe-details-axa.component';
import { InstitutionalRecipeDetailsGeneralDeSaludComponent } from './institutional-recipe-details-general-de-salud/institutional-recipe-details-general-de-salud.component';
//models
import { PendingPrescriptionRequestVO } from 'sif-api-client/lib/models/pending-prescription-request-vo';
import { IRElectronicValidation, scannerStatus, insurerNames } from './model/electronicValidation';
import { WeeCompanyRestService } from 'sif-api-client';
//services
import { DeterminantThemingService } from '@services/determinant-theming.service';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { AppService } from '@services/app.service';
import { AlertService } from '@services/alert.service';

@Component({
  selector: 'app-institutional-recipe',
  templateUrl: './institutional-recipe.component.html',
  styleUrls: ['./institutional-recipe.component.scss']
})
export class InstitutionalRecipeComponent implements OnInit {

  currentTheme: string;
  data: IRElectronicValidation;
  insurerNames = insurerNames;
  constructor(
    private dialog: MatDialog,
    private determinantThemingService: DeterminantThemingService,
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    private weCompanyService: WeeCompanyRestService,
    private appService: AppService,
    private alertService: AlertService
    ) { 
  }

  ngOnInit(): void {
    this.setCurrentTheme();
  }


  /**
   * trigger open dialog action for InstitutionalRecipeDetailsAxaComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openInstitutionalRecipeDetailsAxa(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '1130px';
    dialogConfig.height = '90%';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(InstitutionalRecipeDetailsAxaComponent, dialogConfig);
  }
  
  /**
   * trigger open dialog action for InstitutionalRecipeDetailsGeneralDeSaludComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openInstitutionalRecipeDetailsGeneralDeSalud(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '1130px';
    dialogConfig.height = '90%';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    this.dialog.open(InstitutionalRecipeDetailsGeneralDeSaludComponent, dialogConfig);
  }

  /**
   * set values for theme brand switching
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    this.currentTheme = 
    this.determinantThemingService
      .getCurrentDeterminantTheme();
  }

  checkIncompleteProcess(title: string){
    this.initValidationData();
    const data: PendingPrescriptionRequestVO = {
      determinant: this.appService.store.storeNumber,
    };
    this.data.insurerName = title;
    this.weCompanyService
      .getPendingUsingPOST(data)
      .subscribe( data =>{
        if(data.valid){
          this.data.clientProfileData = data;
          this.institutionalRecipeService
            .validateProcessStep(data.step, this.data);
        }else{
          this.alertService.error(data.message);
        }
    })
  }

  /**
   * config data dialog for validation-flow
   * @author Walmart Mexico SIF Pharmacy project
  */
  initValidationData() {
    this.data = {
      insurerName: undefined,
      determinantId: this.appService.store.storeNumber,
      ticket: undefined,
      step: undefined,
      clientProfileData: undefined,
      token: undefined,
      ticketScanned: undefined,
      scannerStatus: scannerStatus.scanner,
      clientSelectedMedicines: {
        app: [] = [],
        service: [] = []
      }
    };
  }

}
