import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { environment } from 'environment';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

    constructor(@Inject(Injector) private readonly injector: Injector) { super(); }

    handleError(error: Error) {
        // console.log(error);
        
        // if (!environment.production) {
        //     let {message, name} = error;
        //     switch (name) {
        //         case 'HttpErrorResponse':
        //             break;
        //         default:
        //             console.log('handleError: ', error);
        //             break;
        //     }
        // }
        super.handleError(error);
    }

    private get alertService(): AlertService {
        return this.injector.get(AlertService);
    }

}