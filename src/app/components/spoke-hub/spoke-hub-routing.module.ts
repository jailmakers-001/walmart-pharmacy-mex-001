import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpokeHubComponent } from './spoke-hub.component';
import { SpokeHubResolver } from './spoke-hub.resolver';

const routes: Routes = [{ path: '', component: SpokeHubComponent, resolve: { spokeHub: SpokeHubResolver } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SpokeHubResolver]

})
export class SpokeHubRoutingModule { }
