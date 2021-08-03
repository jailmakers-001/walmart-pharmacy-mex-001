/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOInstitucionRespVO } from '../models/zeus-response-voinstitucion-resp-vo';

/**
 * Consulta Institucion Rest Impl
 */
@Injectable({
  providedIn: 'root',
})
class ConsultaInstitucionRestImplService extends __BaseService {
  static readonly consultaInstitucionUsingPOSTPath = '/walmart/institucion/consulta';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to find a insurance carrier by consulta
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with insurance not  exists.<br/>BUSINESS_003: the insurance enter the catch.
   * @return OK
   */
  consultaInstitucionUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOInstitucionRespVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/institucion/consulta`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOInstitucionRespVO>;
      })
    );
  }
  /**
   * Operation used to find a insurance carrier by consulta
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with insurance not  exists.<br/>BUSINESS_003: the insurance enter the catch.
   * @return OK
   */
  consultaInstitucionUsingPOST(): __Observable<ZeusResponseVOInstitucionRespVO> {
    return this.consultaInstitucionUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOInstitucionRespVO)
    );
  }
}

module ConsultaInstitucionRestImplService {
}

export { ConsultaInstitucionRestImplService }
