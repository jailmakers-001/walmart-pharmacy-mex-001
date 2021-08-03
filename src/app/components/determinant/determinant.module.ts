import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modules
import { DeterminantComponent } from './determinant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
//material
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    DeterminantComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    NgxMaskModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  exports: [
    DeterminantComponent
  ]
})
export class DeterminantModule { }
