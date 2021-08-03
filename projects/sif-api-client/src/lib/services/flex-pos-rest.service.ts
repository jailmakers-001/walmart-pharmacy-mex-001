/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FileResponseVO } from '../models/file-response-vo';
import { FlexPosPdfRequestVO } from '../models/flex-pos-pdf-request-vo';
import { FlexPosResponseVO } from '../models/flex-pos-response-vo';
import { FlexPosRequestVO } from '../models/flex-pos-request-vo';

/**
 * Flex Pos Rest
 */
@Injectable({
  providedIn: 'root',
})
class FlexPosRestService extends __BaseService {
  static readonly getPdfUsingPOSTPath = '/walmart/flexpos/generate/pdf';
  static readonly getPropertieUsingPOSTPath = '/walmart/flexpos/get/propertie';
  static readonly saveTransactionUsingPOSTPath = '/walmart/flexpos/transaction/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to save the transaction
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getPdfUsingPOSTResponse(request: FlexPosPdfRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/flexpos/generate/pdf`,
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
   * Operation used to save the transaction
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getPdfUsingPOST(request: FlexPosPdfRequestVO): __Observable<FileResponseVO> {
    return this.getPdfUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to save the transaction
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getPropertieUsingPOSTResponse(request: FlexPosPdfRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/flexpos/get/propertie`,
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
   * Operation used to save the transaction
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getPropertieUsingPOST(request: FlexPosPdfRequestVO): __Observable<FileResponseVO> {
    return this.getPropertieUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to save the transaction
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTransactionUsingPOSTResponse(request: FlexPosRequestVO): __Observable<__StrictHttpResponse<FlexPosResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/flexpos/transaction/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FlexPosResponseVO>;
      })
    );
  }
  /**
   * Operation used to save the transaction
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTransactionUsingPOST(request: FlexPosRequestVO): __Observable<FlexPosResponseVO> {
    return this.saveTransactionUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FlexPosResponseVO)
    );
  }
}

module FlexPosRestService {
}

export { FlexPosRestService }
