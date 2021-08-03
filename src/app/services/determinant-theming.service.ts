import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class DeterminantThemingService {

  constructor(
    private appService: AppService
  ) { 

  }
  getCurrentDeterminantTheme(){
    const determinanFormat = this.appService.getDeterminantFormat();
    return `theme-${determinanFormat}`;
  }
}