//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketRoutingModule } from './shopping-basket-routing.module/shopping-basket-routing.module';
import { DirectivesModule } from '../../../../app/directives/directives.module';
import { PipesModule } from '../../../../app/pipes/pipes.module';
//components
import { ShoppingBasketComponent } from './shopping-basket.component';
import { ListViewShoppingBasketComponent } from '../list-view-shopping-basket/list-view-shopping-basket.component';
//dialog
import { ConfirmRemoveItemShoppingBasketComponent } from '../dialogs/confirm-remove-item-shopping-basket/confirm-remove-item-shopping-basket.component';
import { ConfirmEmptyShoppingBasketComponent } from '../dialogs/confirm-empty-shopping-basket/confirm-empty-shopping-basket.component';
import { FlexPOSComponent } from '../dialogs/flex-pos/flex-pos.component';
//angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// module
import { LogoHeaderModule } from '@components/shared/logo-header/logo-header.module';
// 3-party
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    ShoppingBasketComponent,
    ListViewShoppingBasketComponent,
    ConfirmRemoveItemShoppingBasketComponent,
    ConfirmEmptyShoppingBasketComponent,
    FlexPOSComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    ShoppingBasketRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    NgxBarcodeModule,
    LogoHeaderModule
  ]
})
export class ShoppingBasketModule { }
