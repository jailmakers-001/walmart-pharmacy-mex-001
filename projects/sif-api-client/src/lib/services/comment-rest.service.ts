/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOAccessLogReportResponse } from '../models/zeus-response-voaccess-log-report-response';
import { AccessLogReportRequest } from '../models/access-log-report-request';
import { ZeusResponseVOCommentVO } from '../models/zeus-response-vocomment-vo';
import { CommentVO } from '../models/comment-vo';

/**
 * Comment Rest
 */
@Injectable({
  providedIn: 'root',
})
class CommentRestService extends __BaseService {
  static readonly reportUsingPOSTPath = '/walmart/comments/report';
  static readonly saveCommentUsingPOSTPath = '/walmart/comments/save';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to save comment or issue
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  reportUsingPOSTResponse(request: AccessLogReportRequest): __Observable<__StrictHttpResponse<ZeusResponseVOAccessLogReportResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/comments/report`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOAccessLogReportResponse>;
      })
    );
  }
  /**
   * Operation used to save comment or issue
   *
   * Response Codes:<br/><br/>WS_200: Business service successfully executed.
   * @param request request
   * @return OK
   */
  reportUsingPOST(request: AccessLogReportRequest): __Observable<ZeusResponseVOAccessLogReportResponse> {
    return this.reportUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOAccessLogReportResponse)
    );
  }

  /**
   * Operation used to save comment or issue
   *
   * Response Codes:<br/><br/>WS_100: Business service successfully executed.<br/>WS_102: Comment can not be null.<br/>WS_103: Object with fields null.<br/>WS_104: Type must be I (Issue) or C (Comment).<br/>WS_105: Unknown error, please contact development team.
   * @param vo vo
   * @return OK
   */
  saveCommentUsingPOSTResponse(vo: CommentVO): __Observable<__StrictHttpResponse<ZeusResponseVOCommentVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = vo;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/comments/save`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOCommentVO>;
      })
    );
  }
  /**
   * Operation used to save comment or issue
   *
   * Response Codes:<br/><br/>WS_100: Business service successfully executed.<br/>WS_102: Comment can not be null.<br/>WS_103: Object with fields null.<br/>WS_104: Type must be I (Issue) or C (Comment).<br/>WS_105: Unknown error, please contact development team.
   * @param vo vo
   * @return OK
   */
  saveCommentUsingPOST(vo: CommentVO): __Observable<ZeusResponseVOCommentVO> {
    return this.saveCommentUsingPOSTResponse(vo).pipe(
      __map(_r => _r.body as ZeusResponseVOCommentVO)
    );
  }
}

module CommentRestService {
}

export { CommentRestService }
