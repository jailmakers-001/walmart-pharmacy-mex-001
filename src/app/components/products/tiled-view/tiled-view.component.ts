import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductInfoResponseVO, ProductInfoVO } from 'sif-api-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tiled-view',
  templateUrl: './tiled-view.component.html',
  styleUrls: ['./tiled-view.component.scss']
})
export class TiledViewComponent {
  @Input('products') products: ProductInfoVO[]
  @Output() onOpenDetails = new EventEmitter<ProductInfoResponseVO>();
  @Output() onAddToCart = new EventEmitter<ProductInfoResponseVO>();
  @Output() onReportNegate = new EventEmitter<ProductInfoResponseVO>();
  @Output() onLocateProduct = new EventEmitter<ProductInfoResponseVO>();
  itemToNegate:number = environment.itemToNegate;

  openDetails(product: ProductInfoResponseVO) {
    this.onOpenDetails.emit(product)
  }
  addToCart(product: ProductInfoResponseVO) {
    this.onAddToCart.emit(product)
  }
  reportNegate(product: ProductInfoResponseVO) {
    this.onReportNegate.emit(product)
  }
  locateProduct(product: ProductInfoResponseVO) {
    this.onLocateProduct.emit(product)
  }
}
