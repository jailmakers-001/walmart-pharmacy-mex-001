import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class ImageThemingService {

  constructor(
    private appService: AppService
  ) { }
  
  private patAssets: string = 'assets/img/pat'; 
  private evAssets: string = 'assets/img/institutional-recipe/electronic-validation'; 
  private sbAssets: string = 'assets/img/shopping-basket';
  private headerLogos: string = 'assets/img/logo/determinant';
  private determinanFormat = this.appService.getDeterminantFormat();
  
  getElectronicValidationStepper(image){
    return `${this.evAssets}/${this.determinanFormat}/${image}`;
  }

  //was removed by desing manager
  getFlexPosProcessAsset(){
    return `${this.sbAssets}/${this.determinanFormat}/process.svg`;
  }

  getHeaderLogoImage(){
    const extension = 'svg';
    return `${this.headerLogos}/${this.determinanFormat}.${extension}`;
  }

}
