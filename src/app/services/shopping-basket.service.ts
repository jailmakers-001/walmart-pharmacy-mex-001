import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { ShoppingBasketItem } from '../components/shopping-basket/models/shopping-basket-item';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  private indexUrl:string = '/home';
  private shoppingBasketArr: ShoppingBasketItem[] = [];
  private _shoppingBasketArrSize: Subject<any> = new Subject<any>();
  shoppingBasketArrSize$ = this._shoppingBasketArrSize;
  private shoppingBasketTotal:number;
  private _shoppingBasketTotal: Subject<any> = new Subject<any>();
  shoppingBasketTotal$ = this._shoppingBasketTotal;

  
  constructor( private router: Router,
               private alertService: AlertService ) {
  }

  /**
   * add +1 to the shopping-basket size
   * @author Walmart Mexico SIF Pharmacy project
  */
  private addShoppingBasketItemSize(){
    this._shoppingBasketArrSize.next( this.shoppingBasketArr.length + 1 );
  }

  /**
   * remove -1 to the shopping-basket size
   * @author Walmart Mexico SIF Pharmacy project
  */
  private removeShoppingBasketItemSize(): void{
    this._shoppingBasketArrSize.next( this.shoppingBasketArr.length - 1 )
  }

  /**
   * add +1 to the specified product in the shopping-basket array
   * @author Walmart Mexico SIF Pharmacy project
  */
  addShoppingBasketItemQty( index:number ): void{
    this.shoppingBasketArr[ index ].qty += 1; 
    this.getSummaryAndCosts();
  }

  /**
   * remove -1 to the specified product in the shopping-basket array
   * @author Walmart Mexico SIF Pharmacy project
  */
  removeShoppingBasketItemQty(index: number): void {
    this.shoppingBasketArr[index].qty -= 1;
    this.getSummaryAndCosts();
  }


  /** 
   * add item to the the shopping-basket array
   *  if item to add already exist update his qty
   *  if item to add exceed item stock not is added and show message error
   *  if item to add not exits add it to shopping-basket arr
   * @author Walmart Mexico SIF Pharmacy project
  */
  addShoppingBasketItem( itemToAdd:ShoppingBasketItem ):any{
    let itemAddedMessage: string = 'El producto ha sido agregado con éxito';
    let itemStockLimitExceededMessage: string = `Se ha excedido la cantidad de ${itemToAdd.stock} productos disponibles`;
    let isNewItem:boolean = true;
    this.shoppingBasketArr.map((item, index) => {
      if (itemToAdd.id == item.id) {
        isNewItem = false;
        const newItemQty = this.shoppingBasketArr[index].qty + itemToAdd.qty;
        if (newItemQty <= itemToAdd.stock) {
          this.shoppingBasketArr[index].qty = newItemQty;
          this.getSummaryAndCosts();
          this.alertService.success(itemAddedMessage);
        } else {
          this.alertService.error(itemStockLimitExceededMessage);
        }
      }
    });
    if(isNewItem){
      this.addShoppingBasketItemSize();
      this.shoppingBasketArr.push(itemToAdd);
      this.getSummaryAndCosts();
      this.alertService.success(itemAddedMessage);
    }
  }
  
  /**
   * check if item exist into shopping-basket array to void wholesale
   * @author Walmart Mexico SIF Pharmacy project
  */
  checkItemForWholesale(itemToCheckForWholesale:ShoppingBasketItem):any{
    let itemExist:boolean = false;
    let shoppingBasketItemQty:number;
    this.shoppingBasketArr.map((item, index) => {
      if (itemToCheckForWholesale.id === item.id){
        shoppingBasketItemQty = this.shoppingBasketArr[index].qty;
        itemExist = true;
        return;
      }
    })
    if(itemExist){
      return of(shoppingBasketItemQty);
    }else{
      return of(undefined);
    }
  }

  /**
   * remove completely item from the shopping-basket array
   * @author Walmart Mexico SIF Pharmacy project
  */
  removeShoppingBasketItem(index) {
    this.removeShoppingBasketItemSize();
    if ((this.shoppingBasketArr.length - 1) == 0) {
      this.emptyShoppingBasket();
    } else {
      this.shoppingBasketArr.splice(index, 1);
      this.getSummaryAndCosts();
    }
  }

  /**
   * empty shopping-basket array, then navigate to index
   * @author Walmart Mexico SIF Pharmacy project
  */
  emptyShoppingBasket(){
    const emptyShoppingBasket = 0;
    this.shoppingBasketArr = [];
    this._shoppingBasketArrSize.next( emptyShoppingBasket );
    this.goToIndex();
    this.alertService.success('Te has quedado sin productos en el carrito');
  }

  /**
   * return amount of products into shopping-basket array
   * @returns { Observable<Number> } shopping-basket array
   * @author Walmart Mexico SIF Pharmacy project
  */
  getShoppingBasketItems() {
    return of(this.shoppingBasketArr);
  }

  /**
   * navigate to index
   * @author Walmart Mexico SIF Pharmacy project
  */
  private goToIndex(){
    this.shoppingBasketTotal = 0;
    this.router.navigateByUrl(this.indexUrl);
  }

  /**
   * calc summary and cost of each item into shopping-basket array
   * @author Walmart Mexico SIF Pharmacy project
  */
  private calcSummaryAndCosts() {
    let acummaccumulator:number = 0;
    this.shoppingBasketArr.forEach((currentValue) => {
      acummaccumulator += currentValue.price * currentValue.qty;
    });
    this.shoppingBasketTotal = acummaccumulator;
  }

  /**
   * return summary and cost of shopping-basket array
   * @returns { Observable<Number> } shopping-basket summary and cost
   * @author Walmart Mexico SIF Pharmacy project
  */
  getSummaryAndCosts(){
    this.calcSummaryAndCosts();
    this._shoppingBasketTotal.next(this.shoppingBasketTotal.toFixed(2));
  }

  /**
   * shopping-basket can activate guard
   * @author Walmart Mexico SIF Pharmacy project
  */
  canAccesToShoppingBasket() {
    if (this.shoppingBasketArr.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
