import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpokeHubRoutingModule } from './spoke-hub-routing.module';
import { SpokeHubComponent } from './spoke-hub.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SpokeHubComponent],
  imports: [
    CommonModule,
    SpokeHubRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SpokeHubModule { }
