import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportHealthManagerComponent } from './report-health-manager.component';

const routes: Routes = [{ path: '', component: ReportHealthManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportHealthManagerRoutingModule { }
