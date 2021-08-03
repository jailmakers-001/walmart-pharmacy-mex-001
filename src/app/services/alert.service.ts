import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastNotificationConfiguration } from '../models/toastNotificationConfig';
import { toastNotificationType } from '../models/toastNotificationType';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private toastr: ToastrService) { }
  show(message, valid){
    if(valid){
      this.success(message);
    }else{
      this.error(message)
    }
  }
  success(message, config?: ToastNotificationConfiguration) {
    const messageTemplate =
    `<img width="60px" src="assets/icon/success.png" alt="Success" /><br>
      <h5 class="inner-message">${message}</h5>
    `;
    this.toastr.success(messageTemplate, '', config);
  }

  error(message, config?: ToastNotificationConfiguration) {
    const messageTemplate = 
    `<img width="60px" src="assets/icon/error.png" alt="Success" /><br>
      <h5 class="inner-message">${message}</h5>
    `;
    this.toastr.error(messageTemplate, '', config);
  }

  warning(message, config?: ToastNotificationConfiguration) {
    const messageTemplate =
    `<img width="60px" src="assets/icon/exclamation.png" alt="Warning" /><br>
      <h5 class="inner-message">${message}</h5>
    `;
    this.toastr.warning(messageTemplate, '', config);
  }

  /**
  * alert with config
  * @author Walmart Mexico SIF Pharmacy project
  */
  withConfig(message:string, type:string, config: ToastNotificationConfiguration){
    switch (type) {
      case toastNotificationType.WARNING:
        this.warning(message, config);
        break;
    
      case toastNotificationType.ERROR:
        this.error(message, config);
        break;

      case toastNotificationType.SUCCESS:
        this.success(message, config);
      break;

      default:
        this.success(message, config);
        break;
    }
  }
}
