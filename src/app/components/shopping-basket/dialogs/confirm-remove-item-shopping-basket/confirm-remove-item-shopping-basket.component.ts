import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-confirm-remove-item-shopping-basket',
  templateUrl: './confirm-remove-item-shopping-basket.component.html',
  styleUrls: ['./confirm-remove-item-shopping-basket.component.scss']
})
export class ConfirmRemoveItemShoppingBasketComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<any>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private shoppingBasketService: ShoppingBasketService,
                private _focusMonitor: FocusMonitor ) { }

  ngOnInit(): void {
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog(){
    this.dialogRef.close();
  }

  removeShoppingBasketItem() {
    this.shoppingBasketService
          .removeShoppingBasketItem( this.data );
    this.closeDialog();
  }

}
