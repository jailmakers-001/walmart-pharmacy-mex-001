import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { FocusMonitor } from '@angular/cdk/a11y';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-confirm-empty-shopping-basket',
  templateUrl: './confirm-empty-shopping-basket.component.html',
  styleUrls: ['./confirm-empty-shopping-basket.component.scss']
})
export class ConfirmEmptyShoppingBasketComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<any>,
               private shoppingBasketService: ShoppingBasketService,
               private _focusMonitor: FocusMonitor ) { }

  ngOnInit(): void {
  }

  emptyShoppingBasket(){
    this.shoppingBasketService.emptyShoppingBasket();
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }



}
