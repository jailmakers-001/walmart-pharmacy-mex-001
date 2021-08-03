/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LotCediRequestVO } from '../models/lot-cedi-request-vo';
import { OperationResultResponseVO } from '../models/operation-result-response-vo';
import { FileResponseVO } from '../models/file-response-vo';
import { LotReportRequestVO } from '../models/lot-report-request-vo';
import { LotStoreReportRequestVO } from '../models/lot-store-report-request-vo';
import { LotStoreRequestVO } from '../models/lot-store-request-vo';

/**
 * Lote Caducidad Rest
 */
@Injectable({
  providedIn: 'root',
})
class LoteCaducidadRestService extends __BaseService {
  static readonly getCedisUsingPOSTPath = '/walmart/lote/caducidad/cedis';
  static readonly getInformationUsingPOSTPath = '/walmart/lote/caducidad/get/information';
  static readonly getReportUsingPOSTPath = '/walmart/lote/caducidad/report';
  static readonly getStoreReportUsingPOSTPath = '/walmart/lote/caducidad/store/report';
  static readonly getStoresUsingPOSTPath = '/walmart/lote/caducidad/stores';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to get cedis
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getCedisUsingPOSTResponse(request: LotCediRequestVO): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/lote/caducidad/cedis`,
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
   * Operation used to get cedis
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getCedisUsingPOST(request: LotCediRequestVO): __Observable<Array<string>> {
    return this.getCedisUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @return OK
   */
  getInformationUsingPOSTResponse(): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/lote/caducidad/get/information`,
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
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @return OK
   */
  getInformationUsingPOST(): __Observable<OperationResultResponseVO> {
    return this.getInformationUsingPOSTResponse().pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to get lot_compliance report
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getReportUsingPOSTResponse(request: LotReportRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/lote/caducidad/report`,
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
   * Operation used to get lot_compliance report
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getReportUsingPOST(request: LotReportRequestVO): __Observable<FileResponseVO> {
    return this.getReportUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to get lot_compliance report
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getStoreReportUsingPOSTResponse(request: LotStoreReportRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/lote/caducidad/store/report`,
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
   * Operation used to get lot_compliance report
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getStoreReportUsingPOST(request: LotStoreReportRequestVO): __Observable<FileResponseVO> {
    return this.getStoreReportUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to get stores
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getStoresUsingPOSTResponse(request: LotStoreRequestVO): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/lote/caducidad/stores`,
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
   * Operation used to get stores
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getStoresUsingPOST(request: LotStoreRequestVO): __Observable<Array<string>> {
    return this.getStoresUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<string>)
    );
  }
}

module LoteCaducidadRestService {
}

export { LoteCaducidadRestService }
