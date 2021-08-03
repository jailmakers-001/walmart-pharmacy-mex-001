/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OperationResultResponseVO } from '../models/operation-result-response-vo';

/**
 * Perfect Prescription Rest
 */
@Injectable({
  providedIn: 'root',
})
class PerfectPrescriptionRestService extends __BaseService {
  static readonly generateInventoryUsingPOSTPath = '/walmart/previta/inventory/generate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to generate the inventory
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist
   * @return OK
   */
  generateInventoryUsingPOSTResponse(): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/previta/inventory/generate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationResultResponseVO>;
      })
    );
  }
  /**
   * Operation used to generate the inventory
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist
   * @return OK
   */
  generateInventoryUsingPOST(): __Observable<OperationResultResponseVO> {
    return this.generateInventoryUsingPOSTResponse().pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }
}

module PerfectPrescriptionRestService {
}

export { PerfectPrescriptionRestService }
