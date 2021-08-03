import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterVO, ProductInfoVO, NearbyStoresRestService, TextPredictRestService, PharmaSearchVO } from 'sif-api-client';
//material
import { MatDialog } from '@angular/material/dialog';
//modules
import { DetailsViewComponent } from './details-view/details-view.component';
import { LocateViewComponent } from './locate-view/locate-view.component';
import { NegateViewComponent } from './negate-view/negate-view.component';
import { AddCartViewComponent } from './add-cart-view/add-cart-view.component';
//services
import { AppService } from 'src/app/services/app.service';
import { AlertService } from 'src/app/services/alert.service';
import { HeaderService } from 'src/app/services/header.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit, OnDestroy {
  tiledView = true;
  products: ProductInfoVO[];
  filters: FilterVO
  suggest: string;
  searchName: string;
  itemsPerPage: number = 30;
  currentPage: number = 1;
  currentTheme: string;
  suggestedTextTerm:string;
  showSuggestedTextTerm: boolean;
  showSuggestedTextTermPlaceholder: boolean;
  constructor(
    private actRoute: ActivatedRoute,
    private dialog: MatDialog,
    private near: NearbyStoresRestService,
    private app: AppService,
    private router: Router,
    private alert: AlertService,
    private headerService: HeaderService,
    private textPredictService: TextPredictRestService
  ) { }
  ngOnDestroy(): void {
    this.headerService.emptySearchTermField();
    this.headerService.emptyCurrentLetterValue();
  }

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      if (data.products){
        ({ products: { products: this.products, filters: this.filters }, suggest: this.suggest } = data);
        ({ name: this.searchName } = this.app.search)
      }
      this.getPrediction();
    });
    this.currentTheme = `theme-${this.app.getDeterminantFormat()}`;
  }
  openDetails(product: ProductInfoVO) {
    this.dialog.open(DetailsViewComponent, { panelClass: 'mat-full-container', width: '80%', height: '720px', data: product })
  }

  locateProduct(product: ProductInfoVO) {
    const { storeNumber: determinant } = this.app.store
    const { eanCode, name, description } = product
    this.near.getMedicinesUsingPOST({ determinant, upc: eanCode }).subscribe(response => {
      const thereAreData = response.businessResponse.data.medicines[0];
      if (thereAreData){
        const { businessResponse: { data: { medicines } } } = response;
        this.dialog.open(LocateViewComponent, { id: 'locate', panelClass: 'mat-full-container', width: '936px', data: { medicines, name, description } })
      }else{
        this.alert.error('El medicamento no está disponible en tiendas cercanas');
      }
    })
  }
  
  reportNegate(product: ProductInfoVO) {
    this.dialog.open(NegateViewComponent, { data: product, autoFocus: false })
  }

  addToCart(product: ProductInfoVO) {
    this.dialog.open(AddCartViewComponent, { data: product, autoFocus: false });
  }

  /**
   * search by param
   * @author Walmart Mexico SIF Pharmacy project
  */
  searchSuggestedTerm(searchTerm: string) {
    const searchParams = { id: null, name: searchTerm, suggest: false };
    this.app.search = searchParams;
    this.navigateToProducts();
    this.headerService.updateSearchTerm(searchTerm);
  }

  /**
   * navigate to products module
   * @docs https://github.com/angular/components/issues/9687
   * @author Walmart Mexico SIF Pharmacy project
  */
  navigateToProducts() {
    this.router.navigate(['/productos']);
  }

  getPrediction(){
    this.showSuggestedTextTerm = false;

    if (this.searchName.length < 3 ) {
      return false;
    }

    this.showSuggestedTextTermPlaceholder = true;
    const data: PharmaSearchVO = {
      description: this.searchName,
    }
    
    this.textPredictService
      .productFindTextPredictUsingPOST(data)
    .subscribe( data => {
      if ( data.length && 
           !(this.searchName.toUpperCase() === data[0].toUpperCase())){
        this.suggestedTextTerm = data[0];
        this.showSuggestedTextTerm = true;
      }else{
        this.suggestedTextTerm = '';
      }
      this.showSuggestedTextTermPlaceholder = false;
    })
  }
}
