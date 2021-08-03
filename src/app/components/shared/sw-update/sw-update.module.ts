import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { SwUpdateComponent } from './sw-update.component';
//material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SwUpdateComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
exports: [
  SwUpdateComponent
]
})
export class SwUpdateModule { }
