import { Component, OnInit, INJECTOR, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocateViewComponent } from '../locate-view/locate-view.component';
import { ProductsRestService, ProductInfoVO } from 'sif-api-client';
import { AppService } from 'src/app/services/app.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-negate-view',
  templateUrl: './negate-view.component.html',
  styleUrls: ['./negate-view.component.scss']
})
export class NegateViewComponent {
  qty = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) private product: ProductInfoVO,
    public dialogRef: MatDialogRef<NegateViewComponent>,
    private prod: ProductsRestService,
    private app: AppService,
    private alert: AlertService
  ) { }
  negate() {
    const { store: { name: determinantName, storeNumber: determinantNumber } } = this.app
    const { upc, description: medicineName, eanCode } = this.product
    const { qty: quantity } = this

    this.prod.productRejectedVOUsingPOST({ upc, determinantName, determinantNumber, medicineName, quantity, eanCode }).subscribe(response => {
      const { businessResponse: { data: { valido, message } } } = response;
      this.alert.success(message);
      this.dialogRef.close()
    })
  }
}