import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version: string = environment.version;
  showWipFeatures: boolean = environment.showWipFeatures;
  determinantLogoFooter:string;
  footerLogos: string = 'assets/img/logo/determinant/mini/footer';
  footerDeterminantInfo:string;
  currentTheme: string;
  constructor(
    private appService: AppService
  ){ }

   ngOnInit(): void {
     this.setCurrentTheme();
  }

  /**
   * set values for theme brand switching
   * @author Walmart Mexico SIF Pharmacy project
  */
  setCurrentTheme(){
    const determinanFormat = this.appService.getDeterminantFormat();
    const extension = 'png';
    this.determinantLogoFooter = `${this.footerLogos}/${determinanFormat}.${extension}`;
    this.currentTheme = `theme-${determinanFormat}`;
    this.footerDeterminantInfo = this.appService.store.footer; 
  }

}
