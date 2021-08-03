import { Component, OnInit, Inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
//material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//services
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { ShoppingBasketItem } from '../../shopping-basket/models/shopping-basket-item';
@Component({
  selector: 'app-add-cart-view',
  templateUrl: './add-cart-view.component.html',
  styleUrls: ['./add-cart-view.component.scss']
})
export class AddCartViewComponent implements OnInit {
  qty:number = 0;
  item: ShoppingBasketItem;
  itemForWholesale: any;
  itemWholesale:number = environment.itemWholesale;
  constructor( public dialogRef: MatDialogRef<AddCartViewComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private shoppingCartService: ShoppingBasketService ) { }

  ngOnInit(): void {
    /**
     * subscribe to checkItemForWholesale service
     * @author Walmart Mexico SIF Pharmacy project
    */
    this.shoppingCartService
          .checkItemForWholesale(this.data)
            .subscribe( (data: number) => {
              if(data){
                this.itemForWholesale = data;
              }
            })
  }

  /**
   * add selected item into shopping-basket
   * @author Walmart Mexico SIF Pharmacy project
  */
  addToShoppingCart(){
    this.dialogRef.close();
    this.data.qty = this.qty;
    this.item = {
      id: this.data.id,
      name: this.data.name,
      upc: this.data.upc,
      eanCode: this.data.eanCode,
      laboratory: this.data.laboratory,
      category: this.data.medicineTypeDescription,
      qty: this.qty,
      stock: this.data.stock,
      image: this.data.image,
      price: this.data.price   
    };
    this.shoppingCartService.addShoppingBasketItem( this.item );
  }

}
