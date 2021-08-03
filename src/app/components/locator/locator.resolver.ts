import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { DeterminantServiceRestService, NearStoreVO } from 'sif-api-client';
import { AppService } from '../../services/app.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LocatorResolver implements Resolve<NearStoreVO[]> {
    constructor(private app: AppService, private det: DeterminantServiceRestService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<NearStoreVO[]> {
        const { store: { latitude, longitude } } = this.app
        return this.det.getNearStoresWithPharmacyByLocationUsingPOST({ latitude, longitude, radius: 3000, size: 5 }).
            pipe(map(response => response.businessResponse.data))
    }
}