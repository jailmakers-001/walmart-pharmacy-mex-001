/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FileResponseVO } from '../models/file-response-vo';
import { GenerateChecklistRequestVO } from '../models/generate-checklist-request-vo';
import { OperationResultResponseVO } from '../models/operation-result-response-vo';
import { NormativeCheckListVO } from '../models/normative-check-list-vo';
import { DirectoryVO } from '../models/directory-vo';
import { DirectoriesRequest } from '../models/directories-request';
import { DirectoryRequestVO } from '../models/directory-request-vo';
import { ReviewRequestVO } from '../models/review-request-vo';
import { ReviewVO } from '../models/review-vo';
import { TrackingBaseVO } from '../models/tracking-base-vo';
import { TrackingBaseRequestVO } from '../models/tracking-base-request-vo';
import { TrackingDetailVO } from '../models/tracking-detail-vo';
import { TrackingDetailRequestVO } from '../models/tracking-detail-request-vo';
import { TrackingSaveVO } from '../models/tracking-save-vo';

/**
 * Normative Rest
 */
@Injectable({
  providedIn: 'root',
})
class NormativeRestService extends __BaseService {
  static readonly generateChecklistUsingPOSTPath = '/walmart/normative/checklist/generate';
  static readonly saveChecklistUsingPOSTPath = '/walmart/normative/checklist/save';
  static readonly registerUsingPOST2Path = '/walmart/normative/directory/all';
  static readonly registerUsingPOST3Path = '/walmart/normative/directory/find';
  static readonly generateDirectoryUsingPOSTPath = '/walmart/normative/directory/generate';
  static readonly saveDirectoryUsingPOSTPath = '/walmart/normative/directory/save';
  static readonly generateReviewUsingPOSTPath = '/walmart/normative/review/generate';
  static readonly getReviewUsingPOSTPath = '/walmart/normative/review/list';
  static readonly getTrackingBaseUsingPOSTPath = '/walmart/normative/tracking/base';
  static readonly getTranckingDetailUsingPOSTPath = '/walmart/normative/tracking/detail';
  static readonly saveTrackingUsingPOSTPath = '/walmart/normative/tracking/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to save a checklist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateChecklistUsingPOSTResponse(request: GenerateChecklistRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/checklist/generate`,
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
   * Operation used to save a checklist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateChecklistUsingPOST(request: GenerateChecklistRequestVO): __Observable<FileResponseVO> {
    return this.generateChecklistUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to save a checklist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist
   * @param request request
   * @return OK
   */
  saveChecklistUsingPOSTResponse(request: NormativeCheckListVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/checklist/save`,
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
   * Operation used to save a checklist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/>BUSINESS_501: Element exist
   * @param request request
   * @return OK
   */
  saveChecklistUsingPOST(request: NormativeCheckListVO): __Observable<OperationResultResponseVO> {
    return this.saveChecklistUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to get all directories
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  registerUsingPOST2Response(request: DirectoriesRequest): __Observable<__StrictHttpResponse<Array<DirectoryVO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/directory/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DirectoryVO>>;
      })
    );
  }
  /**
   * Operation used to get all directories
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  registerUsingPOST2(request: DirectoriesRequest): __Observable<Array<DirectoryVO>> {
    return this.registerUsingPOST2Response(request).pipe(
      __map(_r => _r.body as Array<DirectoryVO>)
    );
  }

  /**
   * Operation used to get all directories
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  registerUsingPOST3Response(request: DirectoryRequestVO): __Observable<__StrictHttpResponse<DirectoryVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/directory/find`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DirectoryVO>;
      })
    );
  }
  /**
   * Operation used to get all directories
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  registerUsingPOST3(request: DirectoryRequestVO): __Observable<DirectoryVO> {
    return this.registerUsingPOST3Response(request).pipe(
      __map(_r => _r.body as DirectoryVO)
    );
  }

  /**
   * Operation used to generate directory
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateDirectoryUsingPOSTResponse(request: DirectoriesRequest): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/directory/generate`,
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
   * Operation used to generate directory
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateDirectoryUsingPOST(request: DirectoriesRequest): __Observable<FileResponseVO> {
    return this.generateDirectoryUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to save a directory
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Element exist
   * @param request request
   * @return OK
   */
  saveDirectoryUsingPOSTResponse(request: DirectoryVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/directory/save`,
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
   * Operation used to save a directory
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Databse error.<br/>BUSINESS_501: Element exist
   * @param request request
   * @return OK
   */
  saveDirectoryUsingPOST(request: DirectoryVO): __Observable<OperationResultResponseVO> {
    return this.saveDirectoryUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }

  /**
   * Operation used to generate review
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateReviewUsingPOSTResponse(request: ReviewRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/review/generate`,
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
   * Operation used to generate review
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateReviewUsingPOST(request: ReviewRequestVO): __Observable<FileResponseVO> {
    return this.generateReviewUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to get review
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getReviewUsingPOSTResponse(request: ReviewRequestVO): __Observable<__StrictHttpResponse<Array<ReviewVO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/review/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReviewVO>>;
      })
    );
  }
  /**
   * Operation used to get review
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getReviewUsingPOST(request: ReviewRequestVO): __Observable<Array<ReviewVO>> {
    return this.getReviewUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<ReviewVO>)
    );
  }

  /**
   * Operation used to get tracking base
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getTrackingBaseUsingPOSTResponse(request: TrackingBaseRequestVO): __Observable<__StrictHttpResponse<Array<TrackingBaseVO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/tracking/base`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TrackingBaseVO>>;
      })
    );
  }
  /**
   * Operation used to get tracking base
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getTrackingBaseUsingPOST(request: TrackingBaseRequestVO): __Observable<Array<TrackingBaseVO>> {
    return this.getTrackingBaseUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<TrackingBaseVO>)
    );
  }

  /**
   * Operation used to get tracking detail
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getTranckingDetailUsingPOSTResponse(request: TrackingDetailRequestVO): __Observable<__StrictHttpResponse<Array<TrackingDetailVO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/tracking/detail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TrackingDetailVO>>;
      })
    );
  }
  /**
   * Operation used to get tracking detail
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  getTranckingDetailUsingPOST(request: TrackingDetailRequestVO): __Observable<Array<TrackingDetailVO>> {
    return this.getTranckingDetailUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as Array<TrackingDetailVO>)
    );
  }

  /**
   * Operation used to get tracking detail
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTrackingUsingPOSTResponse(request: TrackingSaveVO): __Observable<__StrictHttpResponse<OperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/normative/tracking/save`,
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
   * Operation used to get tracking detail
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  saveTrackingUsingPOST(request: TrackingSaveVO): __Observable<OperationResultResponseVO> {
    return this.saveTrackingUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as OperationResultResponseVO)
    );
  }
}

module NormativeRestService {
}

export { NormativeRestService }
