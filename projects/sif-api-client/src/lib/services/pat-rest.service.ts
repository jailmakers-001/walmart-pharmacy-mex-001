/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OperationResultResponseVO } from '../models/operation-result-response-vo';
import { PatConfirmationRequestVO } from '../models/pat-confirmation-request-vo';
import { PatConsultVO } from '../models/pat-consult-vo';
import { PatConsultRequestVO } from '../models/pat-consult-request-vo';
import { PatExchangeRequestVO } from '../models/pat-exchange-request-vo';
import { PatClientVO } from '../models/pat-client-vo';
import { PatPhoneVO } from '../models/pat-phone-vo';
import { FileResponseVO } from '../models/file-response-vo';
import { PatRedemedPromotionsVO } from '../models/pat-redemed-promotions-vo';
import { PatSmsVO } from '../models/pat-sms-vo';
import { PatTicketResponseVO } from '../models/pat-ticket-response-vo';
import { PatOperationVO } from '../models/pat-operation-vo';

/**
 * Pat Rest
 */
@Injectable({
  providedIn: 'root',
})
class PatRestService extends __BaseService {
  static readonly confirmClientUsingPOSTPath = '/walmart/pat/client/confirm';
  static readonly consultUsingPOSTPath = '/walmart/pat/client/consult';
  static readonly deleteClientDataUsingPOSTPath = '/walmart/pat/client/delete';
  static readonly exchangeUsingPOSTPath = '/walmart/pat/client/exchange';
  static readonly saveClientUsingPOSTPath = '/walmart/pat/client/save';
  static readonly updateClientDataUsingPOSTPath = '/walmart/pat/client/update';
  static readonly savePhoneUsingPOSTPath = '/walmart/pat/phone/save';
  static readonly getPromotionsUsingPOSTPath = '/walmart/pat/promotions';
  static readonly getTicketInformationUsingPOSTPath = '/walmart/pat/promotions/getByCode';
  static readonly processActivePromotionsUsingPOSTPath = '/walmart/pat/promotions/process_active';
  static readonly generateReportGroupUsingPOSTPath = '/walmart/pat/promotions/redemed';
  static readonly smsUsingPOSTPath = '/walmart/pat/sms';
  static readonly sendSmsUsingPOSTPath = '/walmart/pat/sms/send';
  static readonly tetstDB2UsingGETPath = '/walmart/pat/test/db2';
  static readonly saveTicketUsingPOSTPath = '/walmart/pat/ticket/save';

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
  confirmClientUsingPOSTResponse(request: PatConfirmationRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/client/confirm`,
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
  confirmClientUsingPOST(request: PatConfirmationRequestVO): __Observable<OperationResultResponseVO> {
    return this.confirmClientUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to consult client information
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Client dont exist<br/>BUSINESS_502: Inactive client<br/>BUSINESS_503: Deleted client
   * @param request request
   * @return OK
   */
  consultUsingPOSTResponse(request: PatConsultRequestVO): __Observable<__StrictHttpResponse<PatConsultVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/client/consult`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatConsultVO>;
      })
    );
  }
  /**
   * Operation used to consult client information
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Client dont exist<br/>BUSINESS_502: Inactive client<br/>BUSINESS_503: Deleted client
   * @param request request
   * @return OK
   */
  consultUsingPOST(request: PatConsultRequestVO): __Observable<PatConsultVO> {
    return this.consultUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as PatConsultVO)
    );
  }

  /**
   * Operation used to delete client data
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_502: Element do not exist
   * @param request request
   * @return OK
   */
  deleteClientDataUsingPOSTResponse(request: PatConsultRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/client/delete`,
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
   * Operation used to delete client data
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_502: Element do not exist
   * @param request request
   * @return OK
   */
  deleteClientDataUsingPOST(request: PatConsultRequestVO): __Observable<OperationResultResponseVO> {
    return this.deleteClientDataUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to excheange a medicine
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Decode error
   * @param request request
   * @return OK
   */
  exchangeUsingPOSTResponse(request: PatExchangeRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/client/exchange`,
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
   * Operation used to excheange a medicine
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Decode error
   * @param request request
   * @return OK
   */
  exchangeUsingPOST(request: PatExchangeRequestVO): __Observable<OperationResultResponseVO> {
    return this.exchangeUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to save the phone
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element dont exist
   * @param request request
   * @return OK
   */
  saveClientUsingPOSTResponse(request: PatClientVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/client/save`,
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
   * Operation used to save the phone
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element dont exist
   * @param request request
   * @return OK
   */
  saveClientUsingPOST(request: PatClientVO): __Observable<OperationResultResponseVO> {
    return this.saveClientUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to update client data
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_502: Element do not exist
   * @param request request
   * @return OK
   */
  updateClientDataUsingPOSTResponse(request: PatClientVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/client/update`,
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
   * Operation used to update client data
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_502: Element do not exist
   * @param request request
   * @return OK
   */
  updateClientDataUsingPOST(request: PatClientVO): __Observable<OperationResultResponseVO> {
    return this.updateClientDataUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to save the phone
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist<br/>BUSINESS_502: Inactive client<br/>BUSINESS_503: Deleted client
   * @param request request
   * @return OK
   */
  savePhoneUsingPOSTResponse(request: PatPhoneVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/phone/save`,
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
   * Operation used to save the phone
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist<br/>BUSINESS_502: Inactive client<br/>BUSINESS_503: Deleted client
   * @param request request
   * @return OK
   */
  savePhoneUsingPOST(request: PatPhoneVO): __Observable<OperationResultResponseVO> {
    return this.savePhoneUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to get the promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @return OK
   */
  getPromotionsUsingPOSTResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/promotions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Operation used to get the promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @return OK
   */
  getPromotionsUsingPOST(): __Observable<string> {
    return this.getPromotionsUsingPOSTResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Operation used to Send a SMS
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: SMS error.
   * @return OK
   */
  getTicketInformationUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/promotions/getByCode`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * Operation used to Send a SMS
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: SMS error.
   * @return OK
   */
  getTicketInformationUsingPOST(): __Observable<Array<string>> {
    return this.getTicketInformationUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Operation used to Send a SMS
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: SMS error.
   * @return OK
   */
  processActivePromotionsUsingPOSTResponse(): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/promotions/process_active`,
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
   * Operation used to Send a SMS
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: SMS error.
   * @return OK
   */
  processActivePromotionsUsingPOST(): __Observable<OperationResultResponseVO> {
    return this.processActivePromotionsUsingPOSTResponse().pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to get promotions redemed
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateReportGroupUsingPOSTResponse(request: PatRedemedPromotionsVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/promotions/redemed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FileResponseVO>;
      })
    );
  }
  /**
   * Operation used to get promotions redemed
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateReportGroupUsingPOST(request: PatRedemedPromotionsVO): __Observable<FileResponseVO> {
    return this.generateReportGroupUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to Send a SMS
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: SMS error.
   * @param request request
   * @return OK
   */
  smsUsingPOSTResponse(request: PatSmsVO): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/sms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Operation used to Send a SMS
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: SMS error.
   * @param request request
   * @return OK
   */
  smsUsingPOST(request: PatSmsVO): __Observable<string> {
    return this.smsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Operation used to save the phone
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist
   * @param request request
   * @return OK
   */
  sendSmsUsingPOSTResponse(request: PatConsultRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/sms/send`,
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
   * Operation used to save the phone
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist
   * @param request request
   * @return OK
   */
  sendSmsUsingPOST(request: PatConsultRequestVO): __Observable<OperationResultResponseVO> {
    return this.sendSmsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * tetstDB2
   */
  tetstDB2UsingGETResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/walmart/pat/test/db2`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * tetstDB2
   */
  tetstDB2UsingGET(): __Observable<null> {
    return this.tetstDB2UsingGETResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Operation used to save a ticket
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTicketUsingPOSTResponse(request: PatOperationVO): __Observable<__StrictHttpResponse<PatTicketResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pat/ticket/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PatTicketResponseVO>;
      })
    );
  }
  /**
   * Operation used to save a ticket
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTicketUsingPOST(request: PatOperationVO): __Observable<PatTicketResponseVO> {
    return this.saveTicketUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as PatTicketResponseVO)
    );
  }
}

module PatRestService {
}

export { PatRestService }
