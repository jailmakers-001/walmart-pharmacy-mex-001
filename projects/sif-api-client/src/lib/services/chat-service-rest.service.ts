/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOListHubStoreVO } from '../models/zeus-response-volist-hub-store-vo';
import { ChatServiceHubRequest } from '../models/chat-service-hub-request';
import { ZeusResponseVOChatServiceHubNearResponse } from '../models/zeus-response-vochat-service-hub-near-response';
import { ChatServiceHubNearRequest } from '../models/chat-service-hub-near-request';

/**
 * Chat Service Rest
 */
@Injectable({
  providedIn: 'root',
})
class ChatServiceRestService extends __BaseService {
  static readonly getHubStoreUsingPOSTPath = '/walmart/chat/hubstore';
  static readonly getHubNearStoreUsingPOSTPath = '/walmart/chat/hubstorenearstores';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get hub information store from determinants. Write one or more determinants. For each determinant you will get its hub store.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS_201: Determinant can not be null.<br/>WS_202: Data error. One determinant have more that one hub store.<br/>WS-SSRC01: Error retrieving store information from external service.<br/>WS-DB0: Database error.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getHubStoreUsingPOSTResponse(request: ChatServiceHubRequest): __Observable<__StrictHttpResponse<ZeusResponseVOListHubStoreVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/chat/hubstore`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOListHubStoreVO>;
      })
    );
  }
  /**
   * Get hub information store from determinants. Write one or more determinants. For each determinant you will get its hub store.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS_201: Determinant can not be null.<br/>WS_202: Data error. One determinant have more that one hub store.<br/>WS-SSRC01: Error retrieving store information from external service.<br/>WS-DB0: Database error.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getHubStoreUsingPOST(request: ChatServiceHubRequest): __Observable<ZeusResponseVOListHubStoreVO> {
    return this.getHubStoreUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOListHubStoreVO)
    );
  }

  /**
   * Get hub information store from determinant. Include a list with the near stores, in that not include the hub.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS_201: Determinant can not be null.<br/>WS_202: Data error. One determinant have more that one hub store.<br/>WS-SSRC01: Error retrieving store information from external service.<br/>WS-SSRC03: Longitude or latitude are null.<br/>WS-SSRC04: Error finding near stores on external service.<br/>WS-SSRC05: Error parsing to Json format.<br/>WS-DB0: Database error.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getHubNearStoreUsingPOSTResponse(request: ChatServiceHubNearRequest): __Observable<__StrictHttpResponse<ZeusResponseVOChatServiceHubNearResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/chat/hubstorenearstores`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOChatServiceHubNearResponse>;
      })
    );
  }
  /**
   * Get hub information store from determinant. Include a list with the near stores, in that not include the hub.
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS_201: Determinant can not be null.<br/>WS_202: Data error. One determinant have more that one hub store.<br/>WS-SSRC01: Error retrieving store information from external service.<br/>WS-SSRC03: Longitude or latitude are null.<br/>WS-SSRC04: Error finding near stores on external service.<br/>WS-SSRC05: Error parsing to Json format.<br/>WS-DB0: Database error.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getHubNearStoreUsingPOST(request: ChatServiceHubNearRequest): __Observable<ZeusResponseVOChatServiceHubNearResponse> {
    return this.getHubNearStoreUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOChatServiceHubNearResponse)
    );
  }
}

module ChatServiceRestService {
}

export { ChatServiceRestService }
