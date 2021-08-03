import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocatorComponent } from './locator.component';
import { LocatorResolver } from './locator.resolver';

const routes: Routes = [{ path: '', component: LocatorComponent, resolve: { nearStores: LocatorResolver } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LocatorResolver]
})
export class LocatorRoutingModule { }
