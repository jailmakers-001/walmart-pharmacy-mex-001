/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOAddTicketByFolioResponseVO } from '../models/zeus-response-voadd-ticket-by-folio-response-vo';
import { AddTicketByFolioRequestVO } from '../models/add-ticket-by-folio-request-vo';

/**
 * Add Ticket By Folio Rest Impl
 */
@Injectable({
  providedIn: 'root',
})
class AddTicketByFolioRestImplService extends __BaseService {
  static readonly addSurtidoValidadoUsingPOST1Path = '/walmart/canasta/addTicketByFolio';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to add addTicketByFolio
   *
   * Response Codes <br/><br/>COD_ERROR MSJ-001: Servicio ejecutado Exitosamente.<br/>COD_ERROR MSJ-002: Retorna un mensaje de error en el servicio AddTicketByFolio.<br/>COD_ERROR MSJ-003: Error en el servicio AddTicketByFolio ocurrio un error en la ejecucion AddTicketByFolio scotiaBank.<br/>COD_ERROR MSJ-004: Error al obtener token.<br/>COD_ERROR MSJ-005: El servicio entro al catch addTicketByFolio.<br/>COD_ERROR MSJ-006: Ocurrio un Error al insertar en la tabla ScotiaBank.
   * @param requestVO requestVO
   * @return OK
   */
  addSurtidoValidadoUsingPOST1Response(requestVO: AddTicketByFolioRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOAddTicketByFolioResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = requestVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/canasta/addTicketByFolio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOAddTicketByFolioResponseVO>;
      })
    );
  }
  /**
   * Operation used to add addTicketByFolio
   *
   * Response Codes <br/><br/>COD_ERROR MSJ-001: Servicio ejecutado Exitosamente.<br/>COD_ERROR MSJ-002: Retorna un mensaje de error en el servicio AddTicketByFolio.<br/>COD_ERROR MSJ-003: Error en el servicio AddTicketByFolio ocurrio un error en la ejecucion AddTicketByFolio scotiaBank.<br/>COD_ERROR MSJ-004: Error al obtener token.<br/>COD_ERROR MSJ-005: El servicio entro al catch addTicketByFolio.<br/>COD_ERROR MSJ-006: Ocurrio un Error al insertar en la tabla ScotiaBank.
   * @param requestVO requestVO
   * @return OK
   */
  addSurtidoValidadoUsingPOST1(requestVO: AddTicketByFolioRequestVO): __Observable<ZeusResponseVOAddTicketByFolioResponseVO> {
    return this.addSurtidoValidadoUsingPOST1Response(requestVO).pipe(
      __map(_r => _r.body as ZeusResponseVOAddTicketByFolioResponseVO)
    );
  }
}

module AddTicketByFolioRestImplService {
}

export { AddTicketByFolioRestImplService }
