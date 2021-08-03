import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { BatchExpirationContainerComponent } from '../batch-expiration-container.component';
import { BatchExpirationComponent } from '../batch-expiration/batch-expiration.component';
import { BatchExpirationRecipeRoutingModule } from './batch-expiration-container-routing.module';
import { DateRangeInlineModule } from '@components/shared/date-range-inline/module/date-range-inline.module';
// material
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    BatchExpirationContainerComponent,
    BatchExpirationComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BatchExpirationRecipeRoutingModule,
    DateRangeInlineModule
  ],
})
export class BatchExpirationContainerModule { }
