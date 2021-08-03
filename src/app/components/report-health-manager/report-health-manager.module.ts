import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportHealthManagerRoutingModule } from './report-health-manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// pipes
import { PipesModule } from 'src/app/pipes/pipes.module';

//components
import { ReportHealthManagerComponent } from './report-health-manager.component';
import { ReportHealthManagerViewComponent } from './report-health-manager-view/report-health-manager-view.component';
import { DateRangeInlineModule } from '@components/shared/date-range-inline/module/date-range-inline.module';

//material
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportHealthManagerRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    PipesModule,
    MatIconModule,
    DateRangeInlineModule
  ],
  declarations: [ReportHealthManagerComponent, ReportHealthManagerViewComponent],
  entryComponents: [ReportHealthManagerViewComponent],
})
export class ReportHealthManagerModule { }
