import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: 'img[default]',
  host: {
    '(error)':'updateUrl()',
    '[src]':'src'
   }
})
export class ImgPreloaderDirective {
  @Input() src:string;

  updateUrl() {  
    this.src = 'assets/img/not-found-img.png';
  }
}
