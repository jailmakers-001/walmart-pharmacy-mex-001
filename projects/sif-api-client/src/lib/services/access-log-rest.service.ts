/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOAccessLogReportResponse } from '../models/zeus-response-voaccess-log-report-response';
import { AccessLogReportRequest } from '../models/access-log-report-request';
import { ZeusResponseVOString } from '../models/zeus-response-vostring';
import { AccessLogRestRequest } from '../models/access-log-rest-request';

/**
 * Access Log Rest
 */
@Injectable({
  providedIn: 'root',
})
class AccessLogRestService extends __BaseService {
  static readonly accessLogReportUsingPOSTPath = '/walmart/session/accessLogReport';
  static readonly getTokenUsingPOSTPath = '/walmart/session/token';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * -Operation used to get the application token
   *
   * Response Codes:<br/><br/>WS_000: Business service successfully executed.<br/>WS_001: Favor de ingresar los filtros obligatorios para la consulta.<br/>WS_002: Error al generar el archivo.<br/>WS_003: No existen datos para generar archivo.<br/>WS_004: Se genero archivo exitosamente.
   * @param request request
   * @return OK
   */
  accessLogReportUsingPOSTResponse(request: AccessLogReportRequest): __Observable<__StrictHttpResponse<ZeusResponseVOAccessLogReportResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/session/accessLogReport`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOAccessLogReportResponse>;
      })
    );
  }
  /**
   * -Operation used to get the application token
   *
   * Response Codes:<br/><br/>WS_000: Business service successfully executed.<br/>WS_001: Favor de ingresar los filtros obligatorios para la consulta.<br/>WS_002: Error al generar el archivo.<br/>WS_003: No existen datos para generar archivo.<br/>WS_004: Se genero archivo exitosamente.
   * @param request request
   * @return OK
   */
  accessLogReportUsingPOST(request: AccessLogReportRequest): __Observable<ZeusResponseVOAccessLogReportResponse> {
    return this.accessLogReportUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOAccessLogReportResponse)
    );
  }

  /**
   * -Operation used to get the application token
   *
   * Response Codes:<br/><br/>WS_900: Business service successfully executed.<br/>WS_901: Error query token in DB.<br/>WS_902: Token don't exist.<br/>WS_903: Error saving log in DB.<br/>WS_904: Determinant can't be null.<br/>WS_905: IP can't be null<br/>WS_906: IP format error<br/>WS_950: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getTokenUsingPOSTResponse(request: AccessLogRestRequest): __Observable<__StrictHttpResponse<ZeusResponseVOString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/session/token`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOString>;
      })
    );
  }
  /**
   * -Operation used to get the application token
   *
   * Response Codes:<br/><br/>WS_900: Business service successfully executed.<br/>WS_901: Error query token in DB.<br/>WS_902: Token don't exist.<br/>WS_903: Error saving log in DB.<br/>WS_904: Determinant can't be null.<br/>WS_905: IP can't be null<br/>WS_906: IP format error<br/>WS_950: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getTokenUsingPOST(request: AccessLogRestRequest): __Observable<ZeusResponseVOString> {
    return this.getTokenUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOString)
    );
  }
}

module AccessLogRestService {
}

export { AccessLogRestService }
