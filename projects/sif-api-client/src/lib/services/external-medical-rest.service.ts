/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ExternalMedicalVO } from '../models/external-medical-vo';
import { ExternalMedicalRequestVO } from '../models/external-medical-request-vo';
import { OperationResultResponseVO } from '../models/operation-result-response-vo';
import { MedicalActivityEnrollmentVO } from '../models/medical-activity-enrollment-vo';
import { FileResponseVO } from '../models/file-response-vo';
import { MedicalResumeRequestVO } from '../models/medical-resume-request-vo';
import { ValidationMedicalResponseVO } from '../models/validation-medical-response-vo';
import { ValidationMedicalRequestVO } from '../models/validation-medical-request-vo';

/**
 * External Medical Rest
 */
@Injectable({
  providedIn: 'root',
})
class ExternalMedicalRestService extends __BaseService {
  static readonly registerUsingPOSTPath = '/walmart/externalmedical/all';
  static readonly registerUsingPOST1Path = '/walmart/externalmedical/register';
  static readonly genearteResumeUsingPOSTPath = '/walmart/externalmedical/resume';
  static readonly saveUsingPOSTPath = '/walmart/externalmedical/save';
  static readonly validateUsingPOSTPath = '/walmart/externalmedical/validate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to get all medicals
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Invalid data.
   * @param request request
   * @return OK
   */
  registerUsingPOSTResponse(request: ExternalMedicalRequestVO): __Observable<__StrictHttpResponse<Array<ExternalMedicalVO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/externalmedical/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ExternalMedicalVO>>;
      })
    );
  }
  /**
   * Operation used to get all medicals
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Invalid data.
   * @param request request
   * @return OK
   */
  registerUsingPOST(request: ExternalMedicalRequestVO): __Observable<Array<ExternalMedicalVO>> {
    return this.registerUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<ExternalMedicalVO>)
    );
  }

  /**
   * Operation used to register a medical activity
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Invalid data.
   * @param request request
   * @return OK
   */
  registerUsingPOST1Response(request: MedicalActivityEnrollmentVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/externalmedical/register`,
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
   * Operation used to register a medical activity
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Invalid data.
   * @param request request
   * @return OK
   */
  registerUsingPOST1(request: MedicalActivityEnrollmentVO): __Observable<OperationResultResponseVO> {
    return this.registerUsingPOST1Response(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to generate medical resume
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Invalid data.
   * @param request request
   * @return OK
   */
  genearteResumeUsingPOSTResponse(request: MedicalResumeRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/externalmedical/resume`,
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
   * Operation used to generate medical resume
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Invalid data.
   * @param request request
   * @return OK
   */
  genearteResumeUsingPOST(request: MedicalResumeRequestVO): __Observable<FileResponseVO> {
    return this.genearteResumeUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to save a medical
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.
   * @param request request
   * @return OK
   */
  saveUsingPOSTResponse(request: ExternalMedicalVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/externalmedical/save`,
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
   * Operation used to save a medical
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.
   * @param request request
   * @return OK
   */
  saveUsingPOST(request: ExternalMedicalVO): __Observable<OperationResultResponseVO> {
    return this.saveUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to validate a medical
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.
   * @param request request
   * @return OK
   */
  validateUsingPOSTResponse(request: ValidationMedicalRequestVO): __Observable<__StrictHttpResponse<ValidationMedicalResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/externalmedical/validate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ValidationMedicalResponseVO>;
      })
    );
  }
  /**
   * Operation used to validate a medical
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.
   * @param request request
   * @return OK
   */
  validateUsingPOST(request: ValidationMedicalRequestVO): __Observable<ValidationMedicalResponseVO> {
    return this.validateUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ValidationMedicalResponseVO)
    );
  }
}

module ExternalMedicalRestService {
}

export { ExternalMedicalRestService }
