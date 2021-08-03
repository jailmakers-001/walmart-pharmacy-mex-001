/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOCongoVO } from '../models/zeus-response-vocongo-vo';
import { ZeusResponseVODouble } from '../models/zeus-response-vodouble';
import { ZeusResponseVOInt } from '../models/zeus-response-voint';

/**
 * Congo Rest
 */
@Injectable({
  providedIn: 'root',
})
class CongoRestService extends __BaseService {
  static readonly getPriceAndStockUsingGETPath = '/walmart/congo/all/{upc}/{determinantNumber}';
  static readonly getPriceUsingGETPath = '/walmart/congo/price/{upc}/{determinantNumber}';
  static readonly getStockUsingGETPath = '/walmart/congo/stock/{upc}/{determinantNumber}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to search a price
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `CongoRestService.GetPriceAndStockUsingGETParams` containing the following parameters:
   *
   * - `upc`: upc
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getPriceAndStockUsingGETResponse(params: CongoRestService.GetPriceAndStockUsingGETParams): __Observable<__StrictHttpResponse<ZeusResponseVOCongoVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/walmart/congo/all/${encodeURIComponent(params.upc)}/${encodeURIComponent(params.determinantNumber)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOCongoVO>;
      })
    );
  }
  /**
   * Operation used to search a price
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `CongoRestService.GetPriceAndStockUsingGETParams` containing the following parameters:
   *
   * - `upc`: upc
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getPriceAndStockUsingGET(params: CongoRestService.GetPriceAndStockUsingGETParams): __Observable<ZeusResponseVOCongoVO> {
    return this.getPriceAndStockUsingGETResponse(params).pipe(
      __map(_r => _r.body as ZeusResponseVOCongoVO)
    );
  }

  /**
   * Operation used to search a price
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `CongoRestService.GetPriceUsingGETParams` containing the following parameters:
   *
   * - `upc`: upc
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getPriceUsingGETResponse(params: CongoRestService.GetPriceUsingGETParams): __Observable<__StrictHttpResponse<ZeusResponseVODouble>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/walmart/congo/price/${encodeURIComponent(params.upc)}/${encodeURIComponent(params.determinantNumber)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVODouble>;
      })
    );
  }
  /**
   * Operation used to search a price
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `CongoRestService.GetPriceUsingGETParams` containing the following parameters:
   *
   * - `upc`: upc
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getPriceUsingGET(params: CongoRestService.GetPriceUsingGETParams): __Observable<ZeusResponseVODouble> {
    return this.getPriceUsingGETResponse(params).pipe(
      __map(_r => _r.body as ZeusResponseVODouble)
    );
  }

  /**
   * Operation used to search a stock
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `CongoRestService.GetStockUsingGETParams` containing the following parameters:
   *
   * - `upc`: upc
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getStockUsingGETResponse(params: CongoRestService.GetStockUsingGETParams): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/walmart/congo/stock/${encodeURIComponent(params.upc)}/${encodeURIComponent(params.determinantNumber)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOInt>;
      })
    );
  }
  /**
   * Operation used to search a stock
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `CongoRestService.GetStockUsingGETParams` containing the following parameters:
   *
   * - `upc`: upc
   *
   * - `determinantNumber`: determinantNumber
   *
   * @return OK
   */
  getStockUsingGET(params: CongoRestService.GetStockUsingGETParams): __Observable<ZeusResponseVOInt> {
    return this.getStockUsingGETResponse(params).pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }
}

module CongoRestService {

  /**
   * Parameters for getPriceAndStockUsingGET
   */
  export interface GetPriceAndStockUsingGETParams {

    /**
     * upc
     */
    upc: string;

    /**
     * determinantNumber
     */
    determinantNumber: string;
  }

  /**
   * Parameters for getPriceUsingGET
   */
  export interface GetPriceUsingGETParams {

    /**
     * upc
     */
    upc: string;

    /**
     * determinantNumber
     */
    determinantNumber: string;
  }

  /**
   * Parameters for getStockUsingGET
   */
  export interface GetStockUsingGETParams {

    /**
     * upc
     */
    upc: string;

    /**
     * determinantNumber
     */
    determinantNumber: string;
  }
}

export { CongoRestService }
