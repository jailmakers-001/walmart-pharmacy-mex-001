import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatComponent } from './pat.component';

const routes: Routes = [{ path: '', component: PatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatRoutingModule { }
