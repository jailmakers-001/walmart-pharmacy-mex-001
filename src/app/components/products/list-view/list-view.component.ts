import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductInfoVO } from 'sif-api-client';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input('products') products: ProductInfoVO[]
  @Output() onOpenDetails = new EventEmitter<ProductInfoVO>();
  @Output() onAddToCart = new EventEmitter<ProductInfoVO>();
  @Output() onReportNegate = new EventEmitter<ProductInfoVO>();
  @Output() onLocateProduct = new EventEmitter<ProductInfoVO>();
  currentTheme: string;
  itemToNegate: number = environment.itemToNegate;
  constructor(
    public appService: AppService ){
  }
  ngOnInit(): void {
    this.currentTheme = `theme-${this.appService.getDeterminantFormat()}`;
  }

  openDetails(product: ProductInfoVO) {
    this.onOpenDetails.emit(product)
  }
  addToCart(product: ProductInfoVO) {
    this.onAddToCart.emit(product)
  }
  reportNegate(product: ProductInfoVO) {
    this.onReportNegate.emit(product)
  }
  locateProduct(product: ProductInfoVO) {
    this.onLocateProduct.emit(product)
  }
}
