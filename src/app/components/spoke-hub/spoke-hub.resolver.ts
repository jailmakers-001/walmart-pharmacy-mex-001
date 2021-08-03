import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { SpokeHubVO, SpokeHubRestService } from 'sif-api-client';
import { AppService } from '../../services/app.service';

@Injectable({ providedIn: 'root' })
export class SpokeHubResolver implements Resolve<SpokeHubVO> {
    constructor(private app: AppService, private spokeHub: SpokeHubRestService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<SpokeHubVO> {
        const { storeNumber } = this.app.store
        return this.spokeHub.getSpokeHubUsingPOST({ determinant: storeNumber })
    }
}