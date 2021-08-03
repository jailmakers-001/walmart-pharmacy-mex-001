import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// components
import { InstitutionalRecipeDetailsAxaComponent } from './institutional-recipe-details-axa.component';
import { AxaGeneralInformationComponent } from './dialog/general-information/general-information.component';
import { RecipesToFillComponent } from './dialog/recipes-to-fill/recipes-to-fill.component';
import { ElectronicFormatComponent } from './dialog/electronic-format/electronic-format.component';
import { CustomerCoverageComponent } from './dialog/customer-coverage/customer-coverage.component';
import { ImportantValidationsComponent } from './dialog/important-validations/important-validations.component';
import { CredentialsComponent } from './dialog/credentials/credentials.component';
import { RecipeDataValidationComponent } from './dialog/recipe-data-validation/recipe-data-validation.component';
import { SpecialAuthorizationComponent } from './dialog/special-authorization/special-authorization.component';
import { FillingPrescriptionByInstitutionComponent } from './dialog/filling-prescription-by-institution/filling-prescription-by-institution.component';
import { HologramFormatComponent } from './dialog/hologram-format/hologram-format.component';
import { AuthorizationPhonesComponent } from './dialog/authorization-phones/authorization-phones.component';
// modueles
import { InstitutionalRecipeDetailsControlsModule } from '../shared/institutional-recipe-details-controls/institutional-recipe-details-controls.module';

@NgModule({
  declarations: [
    InstitutionalRecipeDetailsAxaComponent, 
    AxaGeneralInformationComponent, 
    RecipesToFillComponent, 
    ElectronicFormatComponent, 
    CustomerCoverageComponent, 
    ImportantValidationsComponent, 
    CredentialsComponent, 
    RecipeDataValidationComponent, 
    SpecialAuthorizationComponent, 
    FillingPrescriptionByInstitutionComponent, 
    HologramFormatComponent, 
    AuthorizationPhonesComponent  
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    InstitutionalRecipeDetailsControlsModule
  ]
})
export class InstitutionalRecipeDetailsAxaModule { }
