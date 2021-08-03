import { NgModule } from '@angular/core';
import { ImgPreloaderDirective } from './img-preloader.directive';

@NgModule({
  declarations: [ImgPreloaderDirective],
  exports: [ImgPreloaderDirective]
})
export class DirectivesModule { }

