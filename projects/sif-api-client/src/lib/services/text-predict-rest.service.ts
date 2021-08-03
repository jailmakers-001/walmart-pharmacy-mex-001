/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Data } from '../models/data';

/**
 * Text Predict Rest
 */
@Injectable({
  providedIn: 'root',
})
class TextPredictRestService extends __BaseService {
  static readonly productFindTextPredictUsingPOSTPath = '/walmart/textPredict/find';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to search Product
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the product with description  not  exists.
   * @param data data
   * @return OK
   */
  productFindTextPredictUsingPOSTResponse(data: Data): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/textPredict/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * Operation used to search Product
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the product with description  not  exists.
   * @param data data
   * @return OK
   */
  productFindTextPredictUsingPOST(data: Data): __Observable<Array<string>> {
    return this.productFindTextPredictUsingPOSTResponse(data).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }
}

module TextPredictRestService {
}

export { TextPredictRestService }
