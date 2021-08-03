/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVORecetaResponseVO } from '../models/zeus-response-voreceta-response-vo';
import { ConsultarFolioReqVO } from '../models/consultar-folio-req-vo';
import { ZeusResponseVOResponseRecetaUpdateVO } from '../models/zeus-response-voresponse-receta-update-vo';
import { AddUpdateRecetaVO } from '../models/add-update-receta-vo';

/**
 * Prescription Rest Impl
 */
@Injectable({
  providedIn: 'root',
})
class PrescriptionRestImplService extends __BaseService {
  static readonly consultarFolioUsingPOSTPath = '/walmart/prescriptions/consultarFolio';
  static readonly updateStatusUsingPOSTPath = '/walmart/prescriptions/updateStatus';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with getRecetaByFolio  not is posibble.<br/>BUSINESS_003: the getRecetaByFolio  enter the catch.
   * @param consultarFolioReqVO consultarFolioReqVO
   * @return OK
   */
  consultarFolioUsingPOSTResponse(consultarFolioReqVO: ConsultarFolioReqVO): __Observable<__StrictHttpResponse<ZeusResponseVORecetaResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = consultarFolioReqVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/prescriptions/consultarFolio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVORecetaResponseVO>;
      })
    );
  }
  /**
   * Operation used
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with getRecetaByFolio  not is posibble.<br/>BUSINESS_003: the getRecetaByFolio  enter the catch.
   * @param consultarFolioReqVO consultarFolioReqVO
   * @return OK
   */
  consultarFolioUsingPOST(consultarFolioReqVO: ConsultarFolioReqVO): __Observable<ZeusResponseVORecetaResponseVO> {
    return this.consultarFolioUsingPOSTResponse(consultarFolioReqVO).pipe(
      __map(_r => _r.body as ZeusResponseVORecetaResponseVO)
    );
  }

  /**
   * Operation used
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with getRecetaByFolio  not is posibble.<br/>BUSINESS_003: the getRecetaByFolio  enter the catch.
   * @param addUpdateRecetaVO addUpdateRecetaVO
   * @return OK
   */
  updateStatusUsingPOSTResponse(addUpdateRecetaVO: AddUpdateRecetaVO): __Observable<__StrictHttpResponse<ZeusResponseVOResponseRecetaUpdateVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = addUpdateRecetaVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/prescriptions/updateStatus`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOResponseRecetaUpdateVO>;
      })
    );
  }
  /**
   * Operation used
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the diagnostic with getRecetaByFolio  not is posibble.<br/>BUSINESS_003: the getRecetaByFolio  enter the catch.
   * @param addUpdateRecetaVO addUpdateRecetaVO
   * @return OK
   */
  updateStatusUsingPOST(addUpdateRecetaVO: AddUpdateRecetaVO): __Observable<ZeusResponseVOResponseRecetaUpdateVO> {
    return this.updateStatusUsingPOSTResponse(addUpdateRecetaVO).pipe(
      __map(_r => _r.body as ZeusResponseVOResponseRecetaUpdateVO)
    );
  }
}

module PrescriptionRestImplService {
}

export { PrescriptionRestImplService }
