import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingBasketService } from 'src/app/services/shopping-basket.service';
import { ConfirmEmptyShoppingBasketComponent } from '../dialogs/confirm-empty-shopping-basket/confirm-empty-shopping-basket.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
//components
import { FlexPOSComponent } from '../dialogs/flex-pos/flex-pos.component';
import { FlexPosList } from '../models/flex-pos-list';
//services
import { FlexPosRequestVO, FlexPosRestService } from 'sif-api-client';
import { ShoppingBasketItem } from '../models/shopping-basket-item';
import { AlertService } from '@services/alert.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit, OnDestroy {

  constructor( 
    private dialog: MatDialog,
    private appService: AppService,
    private shoppingBasketService: ShoppingBasketService,
    private flexPostService: FlexPosRestService,
    private alertService: AlertService ) { 

    }
  
  subscription: Subscription;
  shoppingBasketTotal: any;
  currentTheme: string;
  
  /**
   * get summary and cost of shopping-basket
   * @author Walmart Mexico SIF Pharmacy project
  */
  ngOnInit(): void {
    this.setSubscriptions();

    this.setCurrentTheme();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * empty shopping-basket
   * @author Walmart Mexico SIF Pharmacy project
  */
  emptyShoppingBasket(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '552px';
    dialogConfig.height = '190px';
    dialogConfig.autoFocus = false;
    this.dialog.open(ConfirmEmptyShoppingBasketComponent, dialogConfig);
  }

  /**
   * open shopping-basket order dialog
   * @author Walmart Mexico SIF Pharmacy project
  */
  makeOrder(){
    this.shoppingBasketService
    .getShoppingBasketItems()
    .subscribe( data =>{
      const allItems = data;
      const items = data.map(currentValue => createReq(currentValue));
      const req: FlexPosRequestVO = {
        items,
        storeNbr: this.appService.store.storeNumber
      }

      this.flexPostService
      .saveTransactionUsingPOST(req)
      .subscribe( data => {
        if(data.valid){
          const flexPosList: FlexPosList = {
            items: allItems,
            shoppingBasketTotal: this.shoppingBasketTotal,
            upc: data.upc
          }
          // this.alertService.success(data.message);
          this.openFlexPos(flexPosList);
        }else{
          this.alertService.error(data.message);
        }
      })
    })

    function createReq(currentValue: ShoppingBasketItem){
      return {
        description: currentValue.name,
        eanCode: currentValue.eanCode,
        unitPrice: currentValue.price,
        quantity: currentValue.qty
      }
    }
  }

  /**
   * open FlexPOSComponent dialog
   * @author Walmart Mexico SIF Pharmacy project
  */
  openFlexPos(data: FlexPosList){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'mat-full-container';
    dialogConfig.width = '1329px';
    dialogConfig.height = '959px';
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = data;
    this.dialog.open(FlexPOSComponent, dialogConfig);
  }

  /**
   * set current theme
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    this.currentTheme = `theme-${this.appService.getDeterminantFormat()}`;
  }

  /**
   * create and set subscriptions
   * @author Walmart Mexico SIF Pharmacy project
  */
  setSubscriptions() {
    this.subscription =
      this.shoppingBasketService
        .shoppingBasketTotal$
        .subscribe(data => this.shoppingBasketTotal = data);

    this.shoppingBasketService
      .getSummaryAndCosts();
  }

}
