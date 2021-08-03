import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingBasketComponent } from '../shopping-basket.component';

const routes: Routes = [{ path: '', component: ShoppingBasketComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShoppingBasketRoutingModule { }
