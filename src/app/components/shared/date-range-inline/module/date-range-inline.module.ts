import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//components
import { DateRangeInlineComponent } from '../date-range-inline.component';
// pipes
import { PipesModule } from 'src/app/pipes/pipes.module';
// 3-party
import { MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DateRangeInlineComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    SatDatepickerModule,
    SatNativeDateModule,
    PipesModule
  ],
  exports: [
    DateRangeInlineComponent,
    PipesModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-Es' }]
})
export class DateRangeInlineModule { }
