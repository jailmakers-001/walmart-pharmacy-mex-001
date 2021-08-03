import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from 'environment';
//models
import { IRElectronicValidation, processStep } from '@ir/model/electronicValidation';
import { PrescriptionFolioRequestVO } from 'sif-api-client/lib/models/prescription-folio-request-vo';
//services
import { AlertService } from '@services/alert.service';
import { AppService } from '@services/app.service';
import { ImageThemingService } from '@services/image-theming.service';
import { WeeCompanyRestService } from 'sif-api-client';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { InstitutionalRecipeReturnService } from '@services/institutional-recipe-return.service';

@Component({
  selector: 'app-consult-ticket',
  templateUrl: './consult-ticket.component.html',
  styleUrls: ['./consult-ticket.component.scss']
})
export class ConsultTicketComponent implements OnInit, OnDestroy {

  stepper1: string;
  consultTicketForm: FormGroup;
  subscription: Subscription;
  ticketIdMaxLength: number = 30;
  constructor(
    public dialogRef: MatDialogRef<ConsultTicketComponent>,
    private imageThemingService: ImageThemingService,
    private weCompanyService: WeeCompanyRestService,
    private alertService: AlertService,
    private appService: AppService,
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    private institutionalRecipeReturnService: InstitutionalRecipeReturnService,
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
  ) { }

  ngOnDestroy(): void {
    this.subscription
      .unsubscribe();
  }

  ngOnInit(): void {
    this.setStepperImage();

    this.consultTicketForm = new FormGroup({
      'ticketIdField': new FormControl(
        this.data.ticket,
        [Validators.maxLength(this.ticketIdMaxLength), Validators.required ]),
    });

    this.subscription =
    this.consultTicketForm
      .controls
      .ticketIdField
      .valueChanges
      .subscribe(data => {
        this.data.ticket = data;
      });
  }

  /**
   * trigger open dialog action for ReturnScannerComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openReturnScannerDialog() {
    this.institutionalRecipeReturnService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeReturnService
      .openReturnScannerDialog();
  }

  /**
   * set determinan theme settings
   * @author Walmart Mexico SIF Pharmacy project
  */
  setStepperImage(){
    const step1 = '1.png'; 
    this.stepper1 = 
    this.imageThemingService
     .getElectronicValidationStepper(step1);
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog(){
    this.data.step = processStep.consult_ticket;
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openPauseProcessDialog(this.data);
    
  }

  /**
   * validate current process step
   * @author Walmart Mexico SIF Pharmacy project
  */
  validateTicketConsult(){
    const ticketInfo: PrescriptionFolioRequestVO = {
      determinant: this.data.determinantId,
      folio: this.data.ticket
    }
    this.weCompanyService
      .getfolioUsingPOST(ticketInfo)
      .subscribe(data => {
      if(data.valid){
        this.data.clientProfileData = data;
        this.institutionalRecipeService
          .referenceDialog = this.dialogRef;
        this.institutionalRecipeService
          .validateProcessStep(data.step, this.data);
      }else{
        this.alertService.error(data.message);
      }
    })
  }
}
