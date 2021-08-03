/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOFulfillmentReportResponseVO } from '../models/zeus-response-vofulfillment-report-response-vo';
import { FulfillmentReportRequestVO } from '../models/fulfillment-report-request-vo';
import { OperationResultResponseVO } from '../models/operation-result-response-vo';
import { FulfillmentNotificationRequestVO } from '../models/fulfillment-notification-request-vo';
import { FulfillmentVO } from '../models/fulfillment-vo';

/**
 * Fulfillment Rest
 */
@Injectable({
  providedIn: 'root',
})
class FulfillmentRestService extends __BaseService {
  static readonly generateReportUsingPOST1Path = '/walmart/fulfillment/generateReport';
  static readonly generateResumeUsingPOSTPath = '/walmart/fulfillment/generateResume';
  static readonly healthOfficerNotificationUsingPOSTPath = '/walmart/fulfillment/healthOfficer';
  static readonly sanitaryLicenseNotificationUsingPOSTPath = '/walmart/fulfillment/sanitaryLicense';
  static readonly saveUsingPOST1Path = '/walmart/fulfillment/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to generate fulfullment report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-DB0: Error en BD
   * @param request request
   * @return OK
   */
  generateReportUsingPOST1Response(request: FulfillmentReportRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOFulfillmentReportResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/fulfillment/generateReport`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOFulfillmentReportResponseVO>;
      })
    );
  }
  /**
   * Operation used to generate fulfullment report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-DB0: Error en BD
   * @param request request
   * @return OK
   */
  generateReportUsingPOST1(request: FulfillmentReportRequestVO): __Observable<ZeusResponseVOFulfillmentReportResponseVO> {
    return this.generateReportUsingPOST1Response(request).pipe(
      __map(_r => _r.body as ZeusResponseVOFulfillmentReportResponseVO)
    );
  }

  /**
   * Operation used to generate fulfullment report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-DB0: Error en BD
   * @param request request
   * @return OK
   */
  generateResumeUsingPOSTResponse(request: FulfillmentReportRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOFulfillmentReportResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/fulfillment/generateResume`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOFulfillmentReportResponseVO>;
      })
    );
  }
  /**
   * Operation used to generate fulfullment report
   *
   * Response Codes:<br/><br/>WS_000: Proceso exitoso<br/>WS-DB0: Error en BD
   * @param request request
   * @return OK
   */
  generateResumeUsingPOST(request: FulfillmentReportRequestVO): __Observable<ZeusResponseVOFulfillmentReportResponseVO> {
    return this.generateResumeUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOFulfillmentReportResponseVO)
    );
  }

  /**
   * Operation used to send email about health officer
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: Email error.
   * @param request request
   * @return OK
   */
  healthOfficerNotificationUsingPOSTResponse(request: FulfillmentNotificationRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/fulfillment/healthOfficer`,
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
   * Operation used to send email about health officer
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: Email error.
   * @param request request
   * @return OK
   */
  healthOfficerNotificationUsingPOST(request: FulfillmentNotificationRequestVO): __Observable<OperationResultResponseVO> {
    return this.healthOfficerNotificationUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to send email about Sanitary License
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: Email error.
   * @param request request
   * @return OK
   */
  sanitaryLicenseNotificationUsingPOSTResponse(request: FulfillmentNotificationRequestVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/fulfillment/sanitaryLicense`,
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
   * Operation used to send email about Sanitary License
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: Email error.
   * @param request request
   * @return OK
   */
  sanitaryLicenseNotificationUsingPOST(request: FulfillmentNotificationRequestVO): __Observable<OperationResultResponseVO> {
    return this.sanitaryLicenseNotificationUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to save a fulfillment
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: Databse error.
   * @param request request
   * @return OK
   */
  saveUsingPOST1Response(request: FulfillmentVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/fulfillment/save`,
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
   * Operation used to save a fulfillment
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: Databse error.
   * @param request request
   * @return OK
   */
  saveUsingPOST1(request: FulfillmentVO): __Observable<OperationResultResponseVO> {
    return this.saveUsingPOST1Response(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }
}

module FulfillmentRestService {
}

export { FulfillmentRestService }
