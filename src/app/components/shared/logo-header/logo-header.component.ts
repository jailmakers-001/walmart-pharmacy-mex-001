import { Component, OnInit } from '@angular/core';
import { AppService } from '@services/app.service';
import { ImageThemingService } from '@services/image-theming.service';

@Component({
  selector: 'app-logo-header',
  templateUrl: './logo-header.component.html',
  styleUrls: ['./logo-header.component.scss']
})
export class LogoHeaderComponent implements OnInit {

  determinantLogoHeader:string;
  storeName: string;
  storeNumber:string;

  constructor(
    private imageThemingService: ImageThemingService,
    private appService: AppService) { 
    this.storeName = this.appService.store.name;
    this.storeNumber = this.appService.store.storeNumber;
    }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(){
    this.determinantLogoHeader = this.imageThemingService.getHeaderLogoImage();
  }
}
