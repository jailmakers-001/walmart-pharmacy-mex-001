import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { ShoppingBasketItem } from '../models/shopping-basket-item';
import { environment } from 'src/environments/environment';
//material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//components
import { ConfirmRemoveItemShoppingBasketComponent } from '../dialogs/confirm-remove-item-shopping-basket/confirm-remove-item-shopping-basket.component';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-list-view-shopping-basket',
  templateUrl: './list-view-shopping-basket.component.html',
  styleUrls: ['./list-view-shopping-basket.component.scss']
})
export class ListViewShoppingBasketComponent implements OnInit, OnDestroy {

  constructor( 
    private shoppingBasketService: ShoppingBasketService,
    private dialog: MatDialog,
    private appService: AppService,
    private alert: AlertService  ) { 
  }
  
  shoppingCartBasket: ShoppingBasketItem[];
  subscription: Subscription;
  itemWholesale: number = environment.itemWholesale;
  itemWholesaleMessage: string = 'No puedes agregar más de 12 productos con el mismo UPC';
  itemStockMessage: string = 'Has alcanzado el número máximo de productos disponibles';
  currentTheme: string;

  ngOnInit(): void {
    this.subscription = 
    this.shoppingBasketService
      .getShoppingBasketItems()
      .subscribe(data => this.shoppingCartBasket = data);
    this.currentTheme = `theme-${this.appService.getDeterminantFormat()}`;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeShoppingBasketItem( index ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '552px';
    dialogConfig.height = '190px';
    dialogConfig.autoFocus = false;
    dialogConfig.data = {
      index
    }
    this.dialog.open(ConfirmRemoveItemShoppingBasketComponent, dialogConfig);
  }

  addShoppingBasketItemQty( item:ShoppingBasketItem, index:number ){
    this.shoppingBasketService
          .addShoppingBasketItemQty( index );
    if (item.qty == this.itemWholesale){
      this.alert.error(this.itemWholesaleMessage);
    }
    if (item.qty == item.stock) {
      this.alert.error(this.itemStockMessage);
    }
  }

  removeShoppingBasketItemQty( index ){
    this.shoppingBasketService
          .removeShoppingBasketItemQty( index );
  }
}
