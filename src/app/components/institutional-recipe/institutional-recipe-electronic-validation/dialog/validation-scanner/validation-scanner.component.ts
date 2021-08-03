import { Component, OnInit, Inject, HostListener, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'environment';
//models
import { IRElectronicValidation, processStep, scannerStatus} from '@ir/model/electronicValidation';
//services
import { ImageThemingService } from '@services/image-theming.service';
import { AlertService } from '@services/alert.service';
import { InstitutionalRecipeValidationService } from '@services/institutional-recipe-validation.service';
import { WeeCompanyRestService, ConfirmTicketRequestVO } from 'sif-api-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-validation-scanner',
  templateUrl: './validation-scanner.component.html',
  styleUrls: ['./validation-scanner.component.scss']
})
export class ValidationScannerComponent implements OnInit, OnDestroy {

  stepper4: string;
  manualTicketForm: FormGroup;
  ticketControl: any;
  ticketConfirmControl: any;
  ticketScanned:string = '';
  subscription: Subscription;
  ticketScannerMaxLength: number = environment.ticketScannerMaxLength;
  ticketScannerMinLength: number = environment.ticketScannerMinLength;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IRElectronicValidation,
    private imageThemingService: ImageThemingService,
    public dialogRef: MatDialogRef<ValidationScannerComponent>,
    private dialog: MatDialog,
    private alertService: AlertService,
    private institutionalRecipeService: InstitutionalRecipeValidationService,
    private weCompanyService: WeeCompanyRestService
  ) { }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const { key } = event;
    if (key == "Enter") {
      if (this.data.scannerStatus === scannerStatus.scanner && this.ticketScanned.length){
        const data: ConfirmTicketRequestVO = {
          determinant: this.data.determinantId,
          folio: this.data.clientProfileData.folio,
          ticket: this.ticketScanned
        }
        this.openValidationConfirmationDialog(data);      
      }
      this.ticketScanned = '';
    } else {
      this.ticketScanned += key;
    }
  }
  ngOnInit(): void {
    this.manualTicketForm = new FormGroup({
      'ticket': new FormControl(
        this.data.ticketScanned,
        [
          Validators.required,
          Validators.minLength(this.ticketScannerMinLength),
          Validators.maxLength(this.ticketScannerMaxLength),
          Validators.pattern('^[0-9]*$')
        ]),
      'ticketConfirm': new FormControl(
        null,
        [
          Validators.required, 
          Validators.minLength(this.ticketScannerMinLength), 
          Validators.maxLength(this.ticketScannerMaxLength), 
          Validators.pattern('^[0-9]*$')
          ]),
    });
    this.ticketControl = this.manualTicketForm.controls.ticket;
    this.ticketConfirmControl = this.manualTicketForm.controls.ticketConfirm;
    this.setStepperImage();
    this.subscription =
      this.manualTicketForm
        .controls
        .ticket
        .valueChanges
        .subscribe(data => {
          this.data.ticketScanned = data
        })

  }

  ngOnDestroy(): void {
    this.subscription
      .unsubscribe();
  }

  /**
   * set determinan theme settings
   * @author Walmart Mexico SIF Pharmacy project
  */
  setStepperImage() {
    const step4 = '4.png';
    this.stepper4 = this.imageThemingService.getElectronicValidationStepper(step4);
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

  toggleScannerStatus(){
    if (this.data.scannerStatus == scannerStatus.scanner){
      this.data.scannerStatus = scannerStatus.manual;
    }else{
      this.data.scannerStatus = scannerStatus.scanner;
    }
  }

  validateTicket(){
    const ticketErrorMessage = 'Los números del ticket ingresados no son iguales';
    if(this.ticketControl.value !== this.ticketConfirmControl.value){
      this.alertService.error(ticketErrorMessage);
    }else{
      const data: ConfirmTicketRequestVO = {
        determinant: this.data.determinantId,
        folio: this.data.clientProfileData.folio,
        ticket: this.manualTicketForm.controls.ticket.value
      }
      this.openValidationConfirmationDialog(data);
    }
  }

  /**
   * trigger open dialog action for CancelProcessComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openPauseProcessDialog() {
    this.data.step = processStep.validation_scanner;
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.institutionalRecipeService
      .openPauseProcessDialog(this.data)
  }

  /**
   * trigger open dialog action for ValidationConfirmationComponent
   * @author Walmart Mexico SIF Pharmacy project
  */
  openValidationConfirmationDialog(data: ConfirmTicketRequestVO){
    this.institutionalRecipeService
      .referenceDialog = this.dialogRef;
    this.weCompanyService
      .confirmTicketUsingPOST(data)
      .subscribe( data =>{
        if(data.valido){
          this.institutionalRecipeService
            .openValidationConfirmationDialog();
        }else{
          this.alertService.error(data.message);
        }
    })
  }

}
