/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOStoreChatSaveResponseVO } from '../models/zeus-response-vostore-chat-save-response-vo';
import { StoreChatRequestVO } from '../models/store-chat-request-vo';

/**
 * Chat Save Service Rest
 */
@Injectable({
  providedIn: 'root',
})
class ChatSaveServiceRestService extends __BaseService {
  static readonly saveTextUsingPOSTPath = '/walmart/saveChat/saveText';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Save text line
   *
   * Response Codes:<br/><br/>WS-001: Business service successfully executed.<br/>ERROR_BD: Error in service.
   * @param storeChatRequestVO storeChatRequestVO
   * @return OK
   */
  saveTextUsingPOSTResponse(storeChatRequestVO: StoreChatRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOStoreChatSaveResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = storeChatRequestVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/saveChat/saveText`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOStoreChatSaveResponseVO>;
      })
    );
  }
  /**
   * Save text line
   *
   * Response Codes:<br/><br/>WS-001: Business service successfully executed.<br/>ERROR_BD: Error in service.
   * @param storeChatRequestVO storeChatRequestVO
   * @return OK
   */
  saveTextUsingPOST(storeChatRequestVO: StoreChatRequestVO): __Observable<ZeusResponseVOStoreChatSaveResponseVO> {
    return this.saveTextUsingPOSTResponse(storeChatRequestVO).pipe(
      __map(_r => _r.body as ZeusResponseVOStoreChatSaveResponseVO)
    );
  }
}

module ChatSaveServiceRestService {
}

export { ChatSaveServiceRestService }
