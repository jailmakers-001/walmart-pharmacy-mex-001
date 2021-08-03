/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOMedicinesByNearbyStoreResponseVO } from '../models/zeus-response-vomedicines-by-nearby-store-response-vo';
import { MedicinesByNearbyStoreRequestVO } from '../models/medicines-by-nearby-store-request-vo';

/**
 * Nearby Stores Rest
 */
@Injectable({
  providedIn: 'root',
})
class NearbyStoresRestService extends __BaseService {
  static readonly getMedicinesUsingPOSTPath = '/walmart/nearbystores/medicines';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used find medicines in nearby stores
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param request request
   * @return OK
   */
  getMedicinesUsingPOSTResponse(request: MedicinesByNearbyStoreRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOMedicinesByNearbyStoreResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/nearbystores/medicines`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOMedicinesByNearbyStoreResponseVO>;
      })
    );
  }
  /**
   * Operation used find medicines in nearby stores
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param request request
   * @return OK
   */
  getMedicinesUsingPOST(request: MedicinesByNearbyStoreRequestVO): __Observable<ZeusResponseVOMedicinesByNearbyStoreResponseVO> {
    return this.getMedicinesUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOMedicinesByNearbyStoreResponseVO)
    );
  }
}

module NearbyStoresRestService {
}

export { NearbyStoresRestService }
