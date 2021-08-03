import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, empty } from "rxjs";
import { finalize, catchError } from "rxjs/operators";
import { LoaderService } from '../services/loader.service';
import { AlertService } from '../services/alert.service';
const SKIP_URLS = ['/quickSearchPharma', '/products/detail', '/assets', '/promotions'];
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public loaderService: LoaderService, private alertService: AlertService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url } = req;        
        const skipRule = !SKIP_URLS.some(v => url.includes(v));
        this.loaderService.show(skipRule);
        return next.handle(req).pipe(
            finalize(() => this.loaderService.hide()),
            catchError(err => {
                // https://medium.com/@kamrankhatti/angular-lazy-routes-loading-chunk-failed-42b16c22a377
                if (skipRule) {
                    this.handleError(err)
                }
                return empty()
            })
        );
    }

    handleError(error){
        let errorMessage;
        switch (error.status) {
            case 0:
            case 504:
                errorMessage = 'Error de comunicación.';
                this.alertService.error(errorMessage);
                break;
            case 404:
                errorMessage = 'Servicio no disponible, inténtelo más tarde.';
                this.alertService.error(errorMessage);
            break;
            case 500:
                errorMessage = 'Ocurrió un error en el servidor.';
                this.alertService.error(errorMessage);
            break;
        }
    }
}