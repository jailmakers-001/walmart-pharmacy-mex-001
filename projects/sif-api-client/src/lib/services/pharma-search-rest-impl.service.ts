/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOProductInfoResponseVO } from '../models/zeus-response-voproduct-info-response-vo';
import { RequestBrandProduct } from '../models/request-brand-product';
import { RequestBrandOrSustanceProduct } from '../models/request-brand-or-sustance-product';
import { ZeusResponseVOPharmaSearchResponseVO } from '../models/zeus-response-vopharma-search-response-vo';
import { RequestBrandVO } from '../models/request-brand-vo';

/**
 * Pharma Search Rest Impl
 */
@Injectable({
  providedIn: 'root',
})
class PharmaSearchRestImplService extends __BaseService {
  static readonly catalogUsingPOSTPath = '/walmart/pharma/catalog';
  static readonly getProductsByBranchUsingPOSTPath = '/walmart/pharma/getProductsByBrand';
  static readonly getProductsByBrandOrSustanceUsingPOSTPath = '/walmart/pharma/getProductsByBrandOrSustance';
  static readonly getProductsBySubstanceUsingGETPath = '/walmart/pharma/getProductsBySubstance/{substanceId}/{determinantNumber}';
  static readonly quickSearchPharmaUsingPOSTPath = '/walmart/pharma/quickSearchPharma';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param requestBrandProduct requestBrandProduct
   * @return OK
   */
  catalogUsingPOSTResponse(requestBrandProduct: RequestBrandProduct): __Observable<__StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = requestBrandProduct;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharma/catalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>;
      })
    );
  }
  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param requestBrandProduct requestBrandProduct
   * @return OK
   */
  catalogUsingPOST(requestBrandProduct: RequestBrandProduct): __Observable<ZeusResponseVOProductInfoResponseVO> {
    return this.catalogUsingPOSTResponse(requestBrandProduct).pipe(
      __map(_r => _r.body as ZeusResponseVOProductInfoResponseVO)
    );
  }

  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param requestBrandProduct requestBrandProduct
   * @return OK
   */
  getProductsByBranchUsingPOSTResponse(requestBrandProduct: RequestBrandProduct): __Observable<__StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = requestBrandProduct;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharma/getProductsByBrand`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>;
      })
    );
  }
  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param requestBrandProduct requestBrandProduct
   * @return OK
   */
  getProductsByBranchUsingPOST(requestBrandProduct: RequestBrandProduct): __Observable<ZeusResponseVOProductInfoResponseVO> {
    return this.getProductsByBranchUsingPOSTResponse(requestBrandProduct).pipe(
      __map(_r => _r.body as ZeusResponseVOProductInfoResponseVO)
    );
  }

  /**
   * Operation used to search a medicine by branch or sustance
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param request request
   * @return OK
   */
  getProductsByBrandOrSustanceUsingPOSTResponse(request: RequestBrandOrSustanceProduct): __Observable<__StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharma/getProductsByBrandOrSustance`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>;
      })
    );
  }
  /**
   * Operation used to search a medicine by branch or sustance
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param request request
   * @return OK
   */
  getProductsByBrandOrSustanceUsingPOST(request: RequestBrandOrSustanceProduct): __Observable<ZeusResponseVOProductInfoResponseVO> {
    return this.getProductsByBrandOrSustanceUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOProductInfoResponseVO)
    );
  }

  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param params The `PharmaSearchRestImplService.GetProductsBySubstanceUsingGETParams` containing the following parameters:
   *
   * - `substanceId`: substanceId
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getProductsBySubstanceUsingGETResponse(params: PharmaSearchRestImplService.GetProductsBySubstanceUsingGETParams): __Observable<__StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/walmart/pharma/getProductsBySubstance/${encodeURIComponent(params.substanceId)}/${encodeURIComponent(params.determinantNumber)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOProductInfoResponseVO>;
      })
    );
  }
  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>WS_800: Business service successfully executed.<br/>WS_801: Error in db.<br/>WS_802: Internal conversion error.
   * @param params The `PharmaSearchRestImplService.GetProductsBySubstanceUsingGETParams` containing the following parameters:
   *
   * - `substanceId`: substanceId
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getProductsBySubstanceUsingGET(params: PharmaSearchRestImplService.GetProductsBySubstanceUsingGETParams): __Observable<ZeusResponseVOProductInfoResponseVO> {
    return this.getProductsBySubstanceUsingGETResponse(params).pipe(
      __map(_r => _r.body as ZeusResponseVOProductInfoResponseVO)
    );
  }

  /**
   * Operation used to search a substance
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the medicine with description  not  exists.
   * @param request request
   * @return OK
   */
  quickSearchPharmaUsingPOSTResponse(request: RequestBrandVO): __Observable<__StrictHttpResponse<ZeusResponseVOPharmaSearchResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/pharma/quickSearchPharma`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOPharmaSearchResponseVO>;
      })
    );
  }
  /**
   * Operation used to search a substance
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the medicine with description  not  exists.
   * @param request request
   * @return OK
   */
  quickSearchPharmaUsingPOST(request: RequestBrandVO): __Observable<ZeusResponseVOPharmaSearchResponseVO> {
    return this.quickSearchPharmaUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOPharmaSearchResponseVO)
    );
  }
}

module PharmaSearchRestImplService {

  /**
   * Parameters for getProductsBySubstanceUsingGET
   */
  export interface GetProductsBySubstanceUsingGETParams {

    /**
     * substanceId
     */
    substanceId: number;

    /**
     * determinantNumber
     */
    determinantNumber: string;
  }
}

export { PharmaSearchRestImplService }
