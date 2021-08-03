/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FileResponseVO } from '../models/file-response-vo';
import { BitacoraRequestVO } from '../models/bitacora-request-vo';

/**
 * Bitacora Rest
 */
@Injectable({
  providedIn: 'root',
})
class BitacoraRestService extends __BaseService {
  static readonly generateReportUsingPOSTPath = '/walmart/bitacora/report/generate';
  static readonly generateReportFmtUsingPOSTPath = '/walmart/bitacora/report/generateFmt';
  static readonly generateReportFmtByDayUsingPOSTPath = '/walmart/bitacora/report/generateFmtDays';

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
  generateReportUsingPOSTResponse(request: BitacoraRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/bitacora/report/generate`,
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
  generateReportUsingPOST(request: BitacoraRequestVO): __Observable<FileResponseVO> {
    return this.generateReportUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/> Not required Business format is not used
   * @param request request
   * @return OK
   */
  generateReportFmtUsingPOSTResponse(request: BitacoraRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/bitacora/report/generateFmt`,
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
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/> Not required Business format is not used
   * @param request request
   * @return OK
   */
  generateReportFmtUsingPOST(request: BitacoraRequestVO): __Observable<FileResponseVO> {
    return this.generateReportFmtUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/> Not required Business format is not used
   * @param request request
   * @return OK
   */
  generateReportFmtByDayUsingPOSTResponse(request: BitacoraRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/bitacora/report/generateFmtDays`,
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
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/> Not required Business format is not used
   * @param request request
   * @return OK
   */
  generateReportFmtByDayUsingPOST(request: BitacoraRequestVO): __Observable<FileResponseVO> {
    return this.generateReportFmtByDayUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }
}

module BitacoraRestService {
}

export { BitacoraRestService }
