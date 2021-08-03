/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOParticularBasketVO } from '../models/zeus-response-voparticular-basket-vo';
import { ParticularBasketVO } from '../models/particular-basket-vo';

/**
 * Particular Basket Rest
 */
@Injectable({
  providedIn: 'root',
})
class ParticularBasketRestService extends __BaseService {
  static readonly saveParticularBasketUsingPOSTPath = '/walmart/basket/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to save a particular basket
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-PB01: Particular basket can not be null.<br/>WS-PB02: Basket medicines can not be null.<br/>WS-PB03: Some required fields in basket are empty.<br/>WS-PB04: Some required fields in medicine list are empty.<br/>WS-PB05: Invalid type of basket. Only: I or P<br/>WS-PB06: Invalid type of assortment in medicine. Only G, S, D, I (UNDEFINED)<br/>WS-PB0X: Unknown error, contact development team.<br/>WS-DB0: DB Error.
   * @param vo vo
   * @return OK
   */
  saveParticularBasketUsingPOSTResponse(vo: ParticularBasketVO): __Observable<__StrictHttpResponse<ZeusResponseVOParticularBasketVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vo;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/basket/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOParticularBasketVO>;
      })
    );
  }
  /**
   * Operation used to save a particular basket
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-PB01: Particular basket can not be null.<br/>WS-PB02: Basket medicines can not be null.<br/>WS-PB03: Some required fields in basket are empty.<br/>WS-PB04: Some required fields in medicine list are empty.<br/>WS-PB05: Invalid type of basket. Only: I or P<br/>WS-PB06: Invalid type of assortment in medicine. Only G, S, D, I (UNDEFINED)<br/>WS-PB0X: Unknown error, contact development team.<br/>WS-DB0: DB Error.
   * @param vo vo
   * @return OK
   */
  saveParticularBasketUsingPOST(vo: ParticularBasketVO): __Observable<ZeusResponseVOParticularBasketVO> {
    return this.saveParticularBasketUsingPOSTResponse(vo).pipe(
      __map(_r => _r.body as ZeusResponseVOParticularBasketVO)
    );
  }
}

module ParticularBasketRestService {
}

export { ParticularBasketRestService }
