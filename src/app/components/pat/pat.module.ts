import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatRoutingModule } from './pat-routing.module';
import { PatComponent } from './pat.component';
import { PatContainer } from './pat.container';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { PatViewListComponent } from './pat-view-list/pat-view-list.component';
import { PatDataCaptureComponent } from './pat-capture-data/pat-capture-data.component';
import { PatScanTicketComponent } from './pat-scan-ticket/pat-scan-ticket.component';
import { PatRedemptionTicketComponent } from './pat-redemption-ticket/pat-redemption-ticket.component';
import { PatManualTicketComponent } from './pat-manual-ticket/pat-manual-ticket.component';
import { PatValidationComponent } from './pat-validation/pat-validation.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
//material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PatRegistryComponent } from './pat-registry/pat-registry.component';
import { PatFinishLaterComponent } from './dialog/pat-finish-later/pat-finish-later.component';
import { PatCancelRegistryComponent } from './dialog/pat-cancel-registry/pat-cancel-registry.component';
import { PatDeleteProfileComponent } from './pat-delete-profile/pat-delete-profile.component';
import { PatTermsAndConditionsComponent } from './pat-terms-and-conditions/pat-terms-and-conditions.component';
//modules
import { ScannerAnimationModule } from 'src/app/components/shared/scanner-animation/scanner-animation.module';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PatRoutingModule,
    MatInputModule,
    MatButtonModule,
    NgxMaskModule,
    MatIconModule,
    DirectivesModule,
    MatCheckboxModule,
    ScannerAnimationModule
  ],
  declarations: [
    PatComponent, 
    PatContainer, 
    PatViewListComponent, 
    PatValidationComponent, 
    PatDataCaptureComponent, 
    PatScanTicketComponent, 
    PatRedemptionTicketComponent, 
    PatManualTicketComponent, 
    PatRegistryComponent, 
    PatFinishLaterComponent, 
    PatCancelRegistryComponent, 
    PatDeleteProfileComponent, 
    PatTermsAndConditionsComponent,
  ],
  entryComponents: [ 
    PatContainer, 
    PatViewListComponent, 
    PatDataCaptureComponent, 
    PatValidationComponent, 
    PatManualTicketComponent]
})
export class PatModule { }
