/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FulfillmentReportResponseVO } from '../models/fulfillment-report-response-vo';
import { SpokeHubRequestVO } from '../models/spoke-hub-request-vo';
import { SpokeHubVO } from '../models/spoke-hub-vo';
import { OperationResultResponseVO } from '../models/operation-result-response-vo';

/**
 * Spoke Hub Rest
 */
@Injectable({
  providedIn: 'root',
})
class SpokeHubRestService extends __BaseService {
  static readonly getExcelUsingPOSTPath = '/walmart/spokehub/excel';
  static readonly getSpokeHubUsingPOSTPath = '/walmart/spokehub/info';
  static readonly getTeradataInfoUsingPOSTPath = '/walmart/spokehub/teradata';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to spoke info
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  getExcelUsingPOSTResponse(request: SpokeHubRequestVO): __Observable<__StrictHttpResponse<FulfillmentReportResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/spokehub/excel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FulfillmentReportResponseVO>;
      })
    );
  }
  /**
   * Operation used to spoke info
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  getExcelUsingPOST(request: SpokeHubRequestVO): __Observable<FulfillmentReportResponseVO> {
    return this.getExcelUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FulfillmentReportResponseVO)
    );
  }

  /**
   * Operation used to spoke info
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  getSpokeHubUsingPOSTResponse(request: SpokeHubRequestVO): __Observable<__StrictHttpResponse<SpokeHubVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/spokehub/info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SpokeHubVO>;
      })
    );
  }
  /**
   * Operation used to spoke info
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  getSpokeHubUsingPOST(request: SpokeHubRequestVO): __Observable<SpokeHubVO> {
    return this.getSpokeHubUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as SpokeHubVO)
    );
  }

  /**
   * Operation used to spoke info
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @return OK
   */
  getTeradataInfoUsingPOSTResponse(): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/spokehub/teradata`,
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
   * Operation used to spoke info
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @return OK
   */
  getTeradataInfoUsingPOST(): __Observable<OperationResultResponseVO> {
    return this.getTeradataInfoUsingPOSTResponse().pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }
}

module SpokeHubRestService {
}

export { SpokeHubRestService }
