/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOString } from '../models/zeus-response-vostring';
import { PharmacyReportDatesRequest } from '../models/pharmacy-report-dates-request';
import { ZeusResponseVOInt } from '../models/zeus-response-voint';

/**
 * Pharmacy Report Rest
 */
@Injectable({
  providedIn: 'root',
})
class PharmacyReportRestService extends __BaseService {
  static readonly generateReportUsingPOST3Path = '/walmart/pharmacyReport/generateReport';
  static readonly processDataUsingPOSTPath = '/walmart/pharmacyReport/processDates';
  static readonly processDataUsingPOST1Path = '/walmart/pharmacyReport/processToday';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to generate report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-NULL: Favor de ingresar los filtros obligatorios para la consulta.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-DB0: Error en BD SIF
   * @param request request
   * @return OK
   */
  generateReportUsingPOST3Response(request: PharmacyReportDatesRequest): __Observable<__StrictHttpResponse<ZeusResponseVOString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharmacyReport/generateReport`,
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
   * Operation used to generate report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-NULL: Favor de ingresar los filtros obligatorios para la consulta.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-DB0: Error en BD SIF
   * @param request request
   * @return OK
   */
  generateReportUsingPOST3(request: PharmacyReportDatesRequest): __Observable<ZeusResponseVOString> {
    return this.generateReportUsingPOST3Response(request).pipe(
      __map(_r => _r.body as ZeusResponseVOString)
    );
  }

  /**
   * Operation used to process data for report.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.<br/>WS-NULL: Some parameter is null.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-UNK: Unknown error.
   * @param request request
   * @return OK
   */
  processDataUsingPOSTResponse(request: PharmacyReportDatesRequest): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharmacyReport/processDates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOInt>;
      })
    );
  }
  /**
   * Operation used to process data for report.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.<br/>WS-NULL: Some parameter is null.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-UNK: Unknown error.
   * @param request request
   * @return OK
   */
  processDataUsingPOST(request: PharmacyReportDatesRequest): __Observable<ZeusResponseVOInt> {
    return this.processDataUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }

  /**
   * Operation used to process data for report.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-UNK: Unknown error.
   * @return OK
   */
  processDataUsingPOST1Response(): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharmacyReport/processToday`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOInt>;
      })
    );
  }
  /**
   * Operation used to process data for report.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-UNK: Unknown error.
   * @return OK
   */
  processDataUsingPOST1(): __Observable<ZeusResponseVOInt> {
    return this.processDataUsingPOST1Response().pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }
}

module PharmacyReportRestService {
}

export { PharmacyReportRestService }
