/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { WeePrescriptionVO } from '../models/wee-prescription-vo';
import { PrescriptionFolioRequestVO } from '../models/prescription-folio-request-vo';
import { RefundPrescriptionResponseVO } from '../models/refund-prescription-response-vo';
import { RefundPrescriptionRequestVO } from '../models/refund-prescription-request-vo';
import { PreparePrescriptionResultVO } from '../models/prepare-prescription-result-vo';
import { PreparePrescriptionRequestVO } from '../models/prepare-prescription-request-vo';
import { PendingPrescriptionRequestVO } from '../models/pending-prescription-request-vo';
import { OperationResultResponseVO } from '../models/operation-result-response-vo';
import { RefundConfirmRequestVO } from '../models/refund-confirm-request-vo';
import { ConfirmSmsRequestVO } from '../models/confirm-sms-request-vo';
import { WeeSendSmsRequestVO } from '../models/wee-send-sms-request-vo';
import { ConfirmTicketRequestVO } from '../models/confirm-ticket-request-vo';

/**
 * Wee Company Rest
 */
@Injectable({
  providedIn: 'root',
})
class WeeCompanyRestService extends __BaseService {
  static readonly getfolioUsingPOSTPath = '/walmart/wee/consult/folio';
  static readonly consultRefundUsingPOSTPath = '/walmart/wee/consult/refund';
  static readonly proccessMedicinesUsingPOSTPath = '/walmart/wee/medicine/confirm';
  static readonly getPendingUsingPOSTPath = '/walmart/wee/pending';
  static readonly confirmRefundUsingPOSTPath = '/walmart/wee/refund/confirm';
  static readonly confirmSmsUsingPOSTPath = '/walmart/wee/sms/confirm';
  static readonly resendSmsUsingPOSTPath = '/walmart/wee/sms/resend';
  static readonly confirmTicketUsingPOSTPath = '/walmart/wee/ticket/confirm';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  getfolioUsingPOSTResponse(request: PrescriptionFolioRequestVO): __Observable<__StrictHttpResponse<WeePrescriptionVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/consult/folio`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WeePrescriptionVO>;
      })
    );
  }
  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  getfolioUsingPOST(request: PrescriptionFolioRequestVO): __Observable<WeePrescriptionVO> {
    return this.getfolioUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as WeePrescriptionVO)
    );
  }

  /**
   * Operation consult refund
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  consultRefundUsingPOSTResponse(request: RefundPrescriptionRequestVO): __Observable<__StrictHttpResponse<RefundPrescriptionResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/consult/refund`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RefundPrescriptionResponseVO>;
      })
    );
  }
  /**
   * Operation consult refund
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  consultRefundUsingPOST(request: RefundPrescriptionRequestVO): __Observable<RefundPrescriptionResponseVO> {
    return this.consultRefundUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as RefundPrescriptionResponseVO)
    );
  }

  /**
   * Operation used to confirm medicines
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>operacion: 1 - confirm, 2 - pause, 3 - cancel
   * @param request request
   * @return OK
   */
  proccessMedicinesUsingPOSTResponse(request: PreparePrescriptionRequestVO): __Observable<__StrictHttpResponse<PreparePrescriptionResultVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/medicine/confirm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PreparePrescriptionResultVO>;
      })
    );
  }
  /**
   * Operation used to confirm medicines
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>operacion: 1 - confirm, 2 - pause, 3 - cancel
   * @param request request
   * @return OK
   */
  proccessMedicinesUsingPOST(request: PreparePrescriptionRequestVO): __Observable<PreparePrescriptionResultVO> {
    return this.proccessMedicinesUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as PreparePrescriptionResultVO)
    );
  }

  /**
   * Operation consult pending
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  getPendingUsingPOSTResponse(request: PendingPrescriptionRequestVO): __Observable<__StrictHttpResponse<WeePrescriptionVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/pending`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WeePrescriptionVO>;
      })
    );
  }
  /**
   * Operation consult pending
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  getPendingUsingPOST(request: PendingPrescriptionRequestVO): __Observable<WeePrescriptionVO> {
    return this.getPendingUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as WeePrescriptionVO)
    );
  }

  /**
   * Operation used to confirm refund
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  confirmRefundUsingPOSTResponse(request: RefundConfirmRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/refund/confirm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationResultResponseVO>;
      })
    );
  }
  /**
   * Operation used to confirm refund
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  confirmRefundUsingPOST(request: RefundConfirmRequestVO): __Observable<OperationResultResponseVO> {
    return this.confirmRefundUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  confirmSmsUsingPOSTResponse(request: ConfirmSmsRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/sms/confirm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationResultResponseVO>;
      })
    );
  }
  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  confirmSmsUsingPOST(request: ConfirmSmsRequestVO): __Observable<OperationResultResponseVO> {
    return this.confirmSmsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  resendSmsUsingPOSTResponse(request: WeeSendSmsRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/sms/resend`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationResultResponseVO>;
      })
    );
  }
  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  resendSmsUsingPOST(request: WeeSendSmsRequestVO): __Observable<OperationResultResponseVO> {
    return this.resendSmsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  confirmTicketUsingPOSTResponse(request: ConfirmTicketRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/wee/ticket/confirm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationResultResponseVO>;
      })
    );
  }
  /**
   * Operation used to save a client
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Codigo invalido.<br/>BUSINESS_502: Client do not exist
   * @param request request
   * @return OK
   */
  confirmTicketUsingPOST(request: ConfirmTicketRequestVO): __Observable<OperationResultResponseVO> {
    return this.confirmTicketUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }
}

module WeeCompanyRestService {
}

export { WeeCompanyRestService }
