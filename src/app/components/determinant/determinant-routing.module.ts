import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeterminantComponent } from './determinant.component';

const routes: Routes = [{ path: '', component: DeterminantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeterminantRoutingModule { }
