import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { PaginationComponent } from '../pagination.component';
//material
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [ 
    PaginationComponent 
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    NgxPaginationModule
  ],
  exports: [
    PaginationComponent,
    NgxPaginationModule
  ]
})
export class PaginationModule { }
