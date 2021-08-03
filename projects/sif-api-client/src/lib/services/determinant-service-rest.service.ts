/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOInt } from '../models/zeus-response-voint';
import { ZeusResponseVOStoreVO } from '../models/zeus-response-vostore-vo';
import { DeterminantServiceGetByNumberRestRequest } from '../models/determinant-service-get-by-number-rest-request';
import { ZeusResponseVOListNearStoreVO } from '../models/zeus-response-volist-near-store-vo';
import { DeterminantServiceNearStoresRestRequest } from '../models/determinant-service-near-stores-rest-request';

/**
 * Determinant Service Rest
 */
@Injectable({
  providedIn: 'root',
})
class DeterminantServiceRestService extends __BaseService {
  static readonly calculateDistanceStoresWithPharmacyUsingPOSTPath = '/walmart/determinant/calculateDistanceStoresWithPharmacy';
  static readonly getByNumberUsingPOSTPath = '/walmart/determinant/getByNumber';
  static readonly getNearStoresWithPharmacyByLocationUsingPOSTPath = '/walmart/determinant/getNearStoresWithPharmacyByLocation';
  static readonly refreshStoreInformationBatchUsingPOSTPath = '/walmart/determinant/refreshStoreInformationBatch';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Calculate the near stores of all determinants. The results are saved in a table<br/>WS-UNK: Unknown error, contact development team.
   * @return OK
   */
  calculateDistanceStoresWithPharmacyUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/determinant/calculateDistanceStoresWithPharmacy`,
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
   * Calculate the near stores of all determinants. The results are saved in a table<br/>WS-UNK: Unknown error, contact development team.
   * @return OK
   */
  calculateDistanceStoresWithPharmacyUsingPOST(): __Observable<ZeusResponseVOInt> {
    return this.calculateDistanceStoresWithPharmacyUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }

  /**
   * Get store information searching by determinant. Note: The user is only used by save in BD, you can use DEFAULT word
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-EMPTY: The result is empty with this determinant number.<br/>WS_201: Determinant can not be null.<br/>WS_202: Data error. Can not create VO.<br/>WS_203: User can not be null.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getByNumberUsingPOSTResponse(request: DeterminantServiceGetByNumberRestRequest): __Observable<__StrictHttpResponse<ZeusResponseVOStoreVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/determinant/getByNumber`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOStoreVO>;
      })
    );
  }
  /**
   * Get store information searching by determinant. Note: The user is only used by save in BD, you can use DEFAULT word
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-EMPTY: The result is empty with this determinant number.<br/>WS_201: Determinant can not be null.<br/>WS_202: Data error. Can not create VO.<br/>WS_203: User can not be null.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getByNumberUsingPOST(request: DeterminantServiceGetByNumberRestRequest): __Observable<ZeusResponseVOStoreVO> {
    return this.getByNumberUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOStoreVO)
    );
  }

  /**
   * Get store information searching by determinant. Note: The user is only used by save in BD, you can use DEFAULT word
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-SSRC03: Longitude or latitude are null.<br/>WS-SSRC04: Error finding near stores on external service.<br/>WS-SSRC05: Error parsing to Json format.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getNearStoresWithPharmacyByLocationUsingPOSTResponse(request: DeterminantServiceNearStoresRestRequest): __Observable<__StrictHttpResponse<ZeusResponseVOListNearStoreVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/determinant/getNearStoresWithPharmacyByLocation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOListNearStoreVO>;
      })
    );
  }
  /**
   * Get store information searching by determinant. Note: The user is only used by save in BD, you can use DEFAULT word
   *
   * Response Codes:<br/><br/>WS-000: Business service successfully executed.<br/>WS-SSRC03: Longitude or latitude are null.<br/>WS-SSRC04: Error finding near stores on external service.<br/>WS-SSRC05: Error parsing to Json format.<br/>WS-UNK: Unknown error, contact development team.
   * @param request request
   * @return OK
   */
  getNearStoresWithPharmacyByLocationUsingPOST(request: DeterminantServiceNearStoresRestRequest): __Observable<ZeusResponseVOListNearStoreVO> {
    return this.getNearStoresWithPharmacyByLocationUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOListNearStoreVO)
    );
  }

  /**
   * Refresh the store's information from the external service of all rows in the DB<br/>WS-UNK: Unknown error, contact development team.
   * @return OK
   */
  refreshStoreInformationBatchUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOInt>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/determinant/refreshStoreInformationBatch`,
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
   * Refresh the store's information from the external service of all rows in the DB<br/>WS-UNK: Unknown error, contact development team.
   * @return OK
   */
  refreshStoreInformationBatchUsingPOST(): __Observable<ZeusResponseVOInt> {
    return this.refreshStoreInformationBatchUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOInt)
    );
  }
}

module DeterminantServiceRestService {
}

export { DeterminantServiceRestService }
