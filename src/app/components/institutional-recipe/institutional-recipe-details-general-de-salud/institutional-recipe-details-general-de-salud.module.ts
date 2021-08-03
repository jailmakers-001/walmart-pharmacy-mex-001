import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
//components
import { CredentialsComponent } from './dialog/credentials/credentials.component';
import { CurrentPrescriptionFormatComponent } from './dialog/current-prescription-format/current-prescription-format.component';
import { GeneralInformationComponent } from './dialog/general-information/general-information.component';
import { InstitutionalRecipeDetailsGeneralDeSaludComponent } from './institutional-recipe-details-general-de-salud.component';
// modueles
import { InstitutionalRecipeDetailsControlsModule } from '../shared/institutional-recipe-details-controls/institutional-recipe-details-controls.module';

@NgModule({
  declarations: [
    CredentialsComponent,
    CurrentPrescriptionFormatComponent,
    GeneralInformationComponent,
    InstitutionalRecipeDetailsGeneralDeSaludComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    InstitutionalRecipeDetailsControlsModule
  ]
})
export class InstitutionalRecipeDetailsGeneralDeSaludModule { }
