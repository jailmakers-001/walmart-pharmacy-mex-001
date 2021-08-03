import { NgModule } from '@angular/core';
import { InstitutionalRecipeComponent } from './institutional-recipe.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: InstitutionalRecipeComponent }];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstitutionalRecipeRoutingModule { }
