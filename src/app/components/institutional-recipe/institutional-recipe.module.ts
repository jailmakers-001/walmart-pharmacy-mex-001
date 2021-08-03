//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionalRecipeDetailsAxaModule } from './institutional-recipe-details-axa/institutional-recipe-details-axa.module';
import { InstitutionalRecipeDetailsGeneralDeSaludModule } from './institutional-recipe-details-general-de-salud/institutional-recipe-details-general-de-salud.module';
import { InstitutionalRecipeRoutingModule } from './institutional-recipe-routing.module';
import { ScannerAnimationModule } from 'src/app/components/shared/scanner-animation/scanner-animation.module';
//3-party
import { NgxMaskModule } from 'ngx-mask';
//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';

//pipes
import { PipesModule } from 'src/app/pipes/pipes.module';

//components institutional recipe validation
import { InstitutionalRecipeComponent } from './institutional-recipe.component'
import { ConsultTicketComponent } from '@ir/electronic-validation/dialog/consult-ticket/consult-ticket.component';
import { ValidationResumeOfMedicinesComponent } from '@ir/electronic-validation/dialog/validation-resume-of-medicines/validation-resume-of-medicines.component';
import { TokenConfirmComponent } from '@ir/electronic-validation/dialog/token-confirm/token-confirm.component';
import { ValidationScannerComponent } from '@ir/electronic-validation/dialog/validation-scanner/validation-scanner.component';
import { ValidationConfirmationComponent } from '@ir/electronic-validation/dialog/validation-confirmation/validation-confirmation.component';
import { PauseProcessComponent } from '@ir/electronic-validation/dialog/pause-process/pause-process.component'
import { CancelProcessComponent } from '@ir/electronic-validation/dialog/cancel-process/cancel-process.component';
import { ProcessIncompleteComponent } from '@ir/electronic-validation/dialog/process-incomplete/process-incomplete.component';
import { DataVerificationComponent } from '@ir/electronic-validation/dialog/data-verification/data-verification.component';

//components institutional recipe return
import { ReturnScannerComponent } from '@ir/return-of-products/dialog/return-scanner/return-scanner.component';
import { ReturnReasonComponent } from '@ir/return-of-products/dialog/return-reason/return-reason.component';
import { ReturnResumeOfMedicinesComponent } from '@ir/return-of-products/dialog/return-resume-of-medicines/return-resume-of-medicines.component';
import { ReturnConfirmationComponent } from '@ir/return-of-products/dialog/return-confirmation/return-confirmation.component';
@NgModule({
  declarations: [
    InstitutionalRecipeComponent,
    ReturnScannerComponent,
    DataVerificationComponent,
    ConsultTicketComponent,
    ValidationResumeOfMedicinesComponent,
    TokenConfirmComponent,
    ValidationScannerComponent,
    ValidationConfirmationComponent,
    PauseProcessComponent,
    CancelProcessComponent,
    ReturnReasonComponent,
    ReturnResumeOfMedicinesComponent,
    ReturnConfirmationComponent,
    ProcessIncompleteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    InstitutionalRecipeRoutingModule,
    InstitutionalRecipeDetailsAxaModule,
    InstitutionalRecipeDetailsGeneralDeSaludModule,
    ScannerAnimationModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    TextFieldModule,
    PipesModule,
    NgxMaskModule
  ]
})
export class InstitutionalRecipeModule { }
