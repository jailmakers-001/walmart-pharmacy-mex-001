/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FileResponseVO } from '../models/file-response-vo';
import { PriceListRequestVO } from '../models/price-list-request-vo';

/**
 * Price List Rest
 */
@Injectable({
  providedIn: 'root',
})
class PriceListRestService extends __BaseService {
  static readonly saveTicketUsingPOST1Path = '/walmart/axa/pricelist/generate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTicketUsingPOST1Response(request: PriceListRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/axa/pricelist/generate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FileResponseVO>;
      })
    );
  }
  /**
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTicketUsingPOST1(request: PriceListRequestVO): __Observable<FileResponseVO> {
    return this.saveTicketUsingPOST1Response(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }
}

module PriceListRestService {
}

export { PriceListRestService }
