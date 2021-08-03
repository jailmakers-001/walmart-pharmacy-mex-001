import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PatRestService } from 'sif-api-client';
import { ProductPromotions } from './promotions.resolver';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
  promotions: ProductPromotions[];
  promotionsLoaded: boolean = false;
  
  constructor(private patRestService: PatRestService) { }

  ngOnInit(): void {
    this.backToTop();
    this.patRestService
      .getPromotionsUsingPOST()
      .pipe(map(this.mappedResponse))
      .subscribe(
        data => {
          this.promotions = data;
          this.promotionsLoaded = true;
          this.backToTop();
        })
  }

  /**
   * back to top page fast
   * @author Walmart Mexico SIF Pharmacy project
  */
  backToTop(){
    window.scroll(0, 0);
  }

  mappedResponse(data): ProductPromotions[] {
    const products = JSON.parse(data).Products;
    return products ? products.map(item => ({
      description: item.LargeDescription,
      largeDescription: item.DescriptionDisplay,
      price: item.PrecioNumerico,
      upc: item.Upc,
      brand: item.Brand,
      promotion: item.PromotionDescription,
      image: 'https://www.superama.com.mx/' + item.ImageUrl
    })) : [];
  }

}
