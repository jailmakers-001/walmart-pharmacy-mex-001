import { Injectable } from '@angular/core';
import { FlashMessagesService as FMS } from 'ngx-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {

  constructor(private fms: FMS) { }

  show(message:string, type, classes=[''], timeout = 5000) {
    if (type) {
      this.success(message, classes, timeout)
    } else {
      this.error(message, classes, timeout)
    }
  }

  success(message:string, classes = [''], timeout = 5000) {
    this.fms.show(message, {
      classes: ['alert', 'alert-primary', ...classes],
      timeout
    });
  }
  error(message:string, classes = [''], timeout = 5000) {
    this.fms.show(message, {
      classes: ['alert', 'alert-danger', ...classes],
      timeout
    });
  }
}
