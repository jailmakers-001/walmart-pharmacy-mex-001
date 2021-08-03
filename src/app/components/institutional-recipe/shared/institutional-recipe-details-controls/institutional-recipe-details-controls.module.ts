import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { InstitutionalRecipeDetailsControlsComponent } from './institutional-recipe-details-controls.component';
//material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    InstitutionalRecipeDetailsControlsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    InstitutionalRecipeDetailsControlsComponent
  ]
})
export class InstitutionalRecipeDetailsControlsModule { }
