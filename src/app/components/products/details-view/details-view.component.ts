import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductInfoVO, ProductsRestService, ProductAttribute } from 'sif-api-client';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
})
export class DetailsViewComponent {
  attributes: ProductAttribute[];
  loading = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: ProductInfoVO,
    private prod: ProductsRestService,
    private app: AppService
  ) {
    const {store:{storeNumber}} = this.app;
    const { categoryId, eanCode: ean, divisionId, pharmaFormId, productId, upc } = this.product
    const data = { 
      categoryId: +categoryId, 
      determinantNumber: +storeNumber, 
      divisionId, 
      ean, 
      pharmaFormId, 
      productId, 
      upc };
    this.prod.productDetailVOUsingPOST(data)
      .subscribe(response => {
        const { businessResponse: { data:{attributes,crossSaleProducts} } } = response
        if (attributes) {
          this.loading = false;
          this.attributes = attributes
        }
      })
  }

}
