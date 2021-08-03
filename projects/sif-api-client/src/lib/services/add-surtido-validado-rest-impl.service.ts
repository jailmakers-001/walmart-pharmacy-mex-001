/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOGenericoRespuesta } from '../models/zeus-response-vogenerico-respuesta';
import { AddSurtidoRequestVO } from '../models/add-surtido-request-vo';

/**
 * Add Surtido Validado Rest Impl
 */
@Injectable({
  providedIn: 'root',
})
class AddSurtidoValidadoRestImplService extends __BaseService {
  static readonly addSurtidoValidadoUsingPOSTPath = '/walmart/canasta/addSurtidoValidado';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to add a validation prescription
   *
   * Response Codes <br/><br/> BUSINESS 001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with prescription not  exists.<br/>BUSINESS_003: the prescription  enter the catch.
   * @param addSurtidoRequestVO addSurtidoRequestVO
   * @return OK
   */
  addSurtidoValidadoUsingPOSTResponse(addSurtidoRequestVO: AddSurtidoRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOGenericoRespuesta>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = addSurtidoRequestVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/canasta/addSurtidoValidado`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOGenericoRespuesta>;
      })
    );
  }
  /**
   * Operation used to add a validation prescription
   *
   * Response Codes <br/><br/> BUSINESS 001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with prescription not  exists.<br/>BUSINESS_003: the prescription  enter the catch.
   * @param addSurtidoRequestVO addSurtidoRequestVO
   * @return OK
   */
  addSurtidoValidadoUsingPOST(addSurtidoRequestVO: AddSurtidoRequestVO): __Observable<ZeusResponseVOGenericoRespuesta> {
    return this.addSurtidoValidadoUsingPOSTResponse(addSurtidoRequestVO).pipe(
      __map(_r => _r.body as ZeusResponseVOGenericoRespuesta)
    );
  }
}

module AddSurtidoValidadoRestImplService {
}

export { AddSurtidoValidadoRestImplService }
