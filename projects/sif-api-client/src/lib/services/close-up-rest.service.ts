/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOInt } from '../models/zeus-response-voint';
import { ZeusResponseVOListString } from '../models/zeus-response-volist-string';
import { CardsStartsWithRequestVO } from '../models/cards-starts-with-request-vo';
import { ZeusResponseVOListDoctorVo } from '../models/zeus-response-volist-doctor-vo';
import { DoctorByCardRequestVO } from '../models/doctor-by-card-request-vo';
import { ZeusResponseVODoctorVo } from '../models/zeus-response-vodoctor-vo';
import { DoctorRequestVo } from '../models/doctor-request-vo';

/**
 * Close Up Rest
 */
@Injectable({
  providedIn: 'root',
})
class CloseUpRestService extends __BaseService {
  static readonly batchUpdateStatusCloseUpUsingPOSTPath = '/walmart/closeup/batchSendDoctors';
  static readonly batchSendToCloseUpUsingPOSTPath = '/walmart/closeup/batchsenddoctortocloseup';
  static readonly batchUpdateStatusPrescriptionCloseUpUsingPOSTPath = '/walmart/closeup/batchupdatestatusprescriptioncloseup';
  static readonly getCardsStartsWithUsingPOSTPath = '/walmart/closeup/cardsstartwith';
  static readonly getDoctorUsingPOSTPath = '/walmart/closeup/findbycard';
  static readonly saveDoctorUsingPOSTPath = '/walmart/closeup/saveDoctor';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to send pending doctors to close up service.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @return OK
   */
  batchUpdateStatusCloseUpUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/closeup/batchSendDoctors`,
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
   * Operation used to send pending doctors to close up service.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @return OK
   */
  batchUpdateStatusCloseUpUsingPOST(): __Observable<ZeusResponseVOInt> {
    return this.batchUpdateStatusCloseUpUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }

  /**
   * Operation used to send doctors file to close up service.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @return OK
   */
  batchSendToCloseUpUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/closeup/batchsenddoctortocloseup`,
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
   * Operation used to send doctors file to close up service.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @return OK
   */
  batchSendToCloseUpUsingPOST(): __Observable<ZeusResponseVOInt> {
    return this.batchSendToCloseUpUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }

  /**
   * Operation used to send pending prescription to close up service.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @return OK
   */
  batchUpdateStatusPrescriptionCloseUpUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/closeup/batchupdatestatusprescriptioncloseup`,
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
   * Operation used to send pending prescription to close up service.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @return OK
   */
  batchUpdateStatusPrescriptionCloseUpUsingPOST(): __Observable<ZeusResponseVOInt> {
    return this.batchUpdateStatusPrescriptionCloseUpUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }

  /**
   * Operation used to find cards that starts with the argument
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @param request request
   * @return OK
   */
  getCardsStartsWithUsingPOSTResponse(request: CardsStartsWithRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOListString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/closeup/cardsstartwith`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOListString>;
      })
    );
  }
  /**
   * Operation used to find cards that starts with the argument
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @param request request
   * @return OK
   */
  getCardsStartsWithUsingPOST(request: CardsStartsWithRequestVO): __Observable<ZeusResponseVOListString> {
    return this.getCardsStartsWithUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOListString)
    );
  }

  /**
   * Operation used to find a doctor by card
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @param request request
   * @return OK
   */
  getDoctorUsingPOSTResponse(request: DoctorByCardRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOListDoctorVo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/closeup/findbycard`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOListDoctorVo>;
      })
    );
  }
  /**
   * Operation used to find a doctor by card
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-DB0: DB Error.
   * @param request request
   * @return OK
   */
  getDoctorUsingPOST(request: DoctorByCardRequestVO): __Observable<ZeusResponseVOListDoctorVo> {
    return this.getDoctorUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOListDoctorVo)
    );
  }

  /**
   * Operation used to save a doctor
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS_600: Doctor null.
   * @param doctorRequest doctorRequest
   * @return OK
   */
  saveDoctorUsingPOSTResponse(doctorRequest: DoctorRequestVo): __Observable<__StrictHttpResponse<ZeusResponseVODoctorVo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = doctorRequest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/closeup/saveDoctor`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVODoctorVo>;
      })
    );
  }
  /**
   * Operation used to save a doctor
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS_600: Doctor null.
   * @param doctorRequest doctorRequest
   * @return OK
   */
  saveDoctorUsingPOST(doctorRequest: DoctorRequestVo): __Observable<ZeusResponseVODoctorVo> {
    return this.saveDoctorUsingPOSTResponse(doctorRequest).pipe(
      __map(_r => _r.body as ZeusResponseVODoctorVo)
    );
  }
}

module CloseUpRestService {
}

export { CloseUpRestService }
