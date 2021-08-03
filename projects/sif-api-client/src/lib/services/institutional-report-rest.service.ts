/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOString } from '../models/zeus-response-vostring';
import { InstitutionalReportDatesRequest } from '../models/institutional-report-dates-request';

/**
 * Institutional Report Rest
 */
@Injectable({
  providedIn: 'root',
})
class InstitutionalReportRestService extends __BaseService {
  static readonly generateReportUsingPOST2Path = '/walmart/institutionalReport/generateReport';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to generate institutional report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-NULL: Favor de ingresar los filtros obligatorios para la consulta.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-DB0: Error en BD
   * @param request request
   * @return OK
   */
  generateReportUsingPOST2Response(request: InstitutionalReportDatesRequest): __Observable<__StrictHttpResponse<ZeusResponseVOString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/institutionalReport/generateReport`,
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
   * Operation used to generate institutional report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-NULL: Favor de ingresar los filtros obligatorios para la consulta.<br/>WS-EMPTY: No se encontraron resultados entre esas fechas.<br/>WS-DB0: Error en BD
   * @param request request
   * @return OK
   */
  generateReportUsingPOST2(request: InstitutionalReportDatesRequest): __Observable<ZeusResponseVOString> {
    return this.generateReportUsingPOST2Response(request).pipe(
      __map(_r => _r.body as ZeusResponseVOString)
    );
  }
}

module InstitutionalReportRestService {
}

export { InstitutionalReportRestService }
