import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketGuard implements CanActivate {

  constructor( private shoppingBasketService: ShoppingBasketService ){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.shoppingBasketService.canAccesToShoppingBasket();
  }
  
}
