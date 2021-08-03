import { Component, OnInit } from '@angular/core';
import { ProductPromotions } from '../promotions/promotions.resolver';
import { PatRestService } from 'sif-api-client';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  promotions: ProductPromotions[];
  currentTheme: string;
  location: string = 'home';
  promotionsLoaded: boolean = false;

  constructor(
    private patRestService: PatRestService,
    private appService: AppService) { 
      
    }

  ngOnInit(): void {
    this.setCurrentTheme();
    this.patRestService
      .getPromotionsUsingPOST()
      .pipe(map(this.mappedResponse))
      .subscribe( 
        data => { 
          this.promotions = this.randomizePromotions(data, 5);
          this.promotionsLoaded = true; 
      })
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

  randomizePromotions(promotions: ProductPromotions[], numberOfElements: number): ProductPromotions[] {
    const shuffled = promotions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfElements);
  }

  /**
   * set values for theme brand switching
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    this.currentTheme = `theme-${this.appService.getDeterminantFormat()}`;
  }

}
