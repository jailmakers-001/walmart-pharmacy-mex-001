/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOOrigisTransactionRestResponseVO } from '../models/zeus-response-voorigis-transaction-rest-response-vo';
import { OrigisTransactQuoteRequestVO } from '../models/origis-transact-quote-request-vo';
import { OrigisTransactSaleRequestVO } from '../models/origis-transact-sale-request-vo';
import { OrigisTransactionResquestVO } from '../models/origis-transaction-resquest-vo';

/**
 * Origis Rest
 */
@Injectable({
  providedIn: 'root',
})
class OrigisRestService extends __BaseService {
  static readonly cancelPromotionsUsingPOSTPath = '/walmart/origis/cancelPromotions';
  static readonly checkPromotionsUsingPOSTPath = '/walmart/origis/checkPromotions';
  static readonly generateSaleUsingPOSTPath = '/walmart/origis/generateSale';
  static readonly updatePromotionsUsingPOSTPath = '/walmart/origis/updatePromotions';
  static readonly validCardStatusUsingPOSTPath = '/walmart/origis/validCardStatus';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to cancel promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the cancel promotions not  exist.
   * @param request request
   * @return OK
   */
  cancelPromotionsUsingPOSTResponse(request: OrigisTransactQuoteRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/origis/cancelPromotions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>;
      })
    );
  }
  /**
   * Operation used to cancel promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the cancel promotions not  exist.
   * @param request request
   * @return OK
   */
  cancelPromotionsUsingPOST(request: OrigisTransactQuoteRequestVO): __Observable<ZeusResponseVOOrigisTransactionRestResponseVO> {
    return this.cancelPromotionsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOOrigisTransactionRestResponseVO)
    );
  }

  /**
   * Operation used to check promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: there aren't check promotions
   * @param request request
   * @return OK
   */
  checkPromotionsUsingPOSTResponse(request: OrigisTransactQuoteRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/origis/checkPromotions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>;
      })
    );
  }
  /**
   * Operation used to check promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: there aren't check promotions
   * @param request request
   * @return OK
   */
  checkPromotionsUsingPOST(request: OrigisTransactQuoteRequestVO): __Observable<ZeusResponseVOOrigisTransactionRestResponseVO> {
    return this.checkPromotionsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOOrigisTransactionRestResponseVO)
    );
  }

  /**
   * Operation used to cancel promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the cancel promotions not  exist.
   * @param request request
   * @return OK
   */
  generateSaleUsingPOSTResponse(request: OrigisTransactSaleRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/origis/generateSale`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>;
      })
    );
  }
  /**
   * Operation used to cancel promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the cancel promotions not  exist.
   * @param request request
   * @return OK
   */
  generateSaleUsingPOST(request: OrigisTransactSaleRequestVO): __Observable<ZeusResponseVOOrigisTransactionRestResponseVO> {
    return this.generateSaleUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOOrigisTransactionRestResponseVO)
    );
  }

  /**
   * Operation used to add promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the add promotions not exist.
   * @param request request
   * @return OK
   */
  updatePromotionsUsingPOSTResponse(request: OrigisTransactQuoteRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/origis/updatePromotions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>;
      })
    );
  }
  /**
   * Operation used to add promotions
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the add promotions not exist.
   * @param request request
   * @return OK
   */
  updatePromotionsUsingPOST(request: OrigisTransactQuoteRequestVO): __Observable<ZeusResponseVOOrigisTransactionRestResponseVO> {
    return this.updatePromotionsUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOOrigisTransactionRestResponseVO)
    );
  }

  /**
   * Operation used to valid card number status
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the card number not  valid.
   * @param request request
   * @return OK
   */
  validCardStatusUsingPOSTResponse(request: OrigisTransactionResquestVO): __Observable<__StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/origis/validCardStatus`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOOrigisTransactionRestResponseVO>;
      })
    );
  }
  /**
   * Operation used to valid card number status
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the card number not  valid.
   * @param request request
   * @return OK
   */
  validCardStatusUsingPOST(request: OrigisTransactionResquestVO): __Observable<ZeusResponseVOOrigisTransactionRestResponseVO> {
    return this.validCardStatusUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOOrigisTransactionRestResponseVO)
    );
  }
}

module OrigisRestService {
}

export { OrigisRestService }
