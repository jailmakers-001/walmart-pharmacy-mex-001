/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOProductDetailVO } from '../models/zeus-response-voproduct-detail-vo';
import { ProductsFilterVO } from '../models/products-filter-vo';
import { FileResponseVO } from '../models/file-response-vo';
import { ProductRejectedRequestVO } from '../models/product-rejected-request-vo';
import { ZeusResponseVOSupervisorResponseVO } from '../models/zeus-response-vosupervisor-response-vo';
import { ZeusResponseVOProductRejectedReportResponseVO } from '../models/zeus-response-voproduct-rejected-report-response-vo';
import { ZeusResponseVOOperationResultResponseVO } from '../models/zeus-response-vooperation-result-response-vo';
import { ProductRejectedVO } from '../models/product-rejected-vo';

/**
 * Products Rest
 */
@Injectable({
  providedIn: 'root',
})
class ProductsRestService extends __BaseService {
  static readonly productDetailVOUsingPOSTPath = '/walmart/products/detail';
  static readonly generateReportUsingPOST4Path = '/walmart/products/report/generate';
  static readonly generateReportGroupUsingPOST1Path = '/walmart/products/report/generateGroup';
  static readonly generateReportGroupUsingGETPath = '/walmart/products/report/getSupervisors';
  static readonly sendFileUsingPOSTPath = '/walmart/products/sendFile';
  static readonly productRejectedVOUsingPOSTPath = '/walmart/products/walmart/productsRejected';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to search Product
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the product with description  not  exists.
   * @param productFilterVO productFilterVO
   * @return OK
   */
  productDetailVOUsingPOSTResponse(productFilterVO: ProductsFilterVO): __Observable<__StrictHttpResponse<ZeusResponseVOProductDetailVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productFilterVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/products/detail`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOProductDetailVO>;
      })
    );
  }
  /**
   * Operation used to search Product
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the product with description  not  exists.
   * @param productFilterVO productFilterVO
   * @return OK
   */
  productDetailVOUsingPOST(productFilterVO: ProductsFilterVO): __Observable<ZeusResponseVOProductDetailVO> {
    return this.productDetailVOUsingPOSTResponse(productFilterVO).pipe(
      __map(_r => _r.body as ZeusResponseVOProductDetailVO)
    );
  }

  /**
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/> SUPERVISOR is not required, not used
   * @param request request
   * @return OK
   */
  generateReportUsingPOST4Response(request: ProductRejectedRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/products/report/generate`,
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
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.<br/> SUPERVISOR is not required, not used
   * @param request request
   * @return OK
   */
  generateReportUsingPOST4(request: ProductRejectedRequestVO): __Observable<FileResponseVO> {
    return this.generateReportUsingPOST4Response(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateReportGroupUsingPOST1Response(request: ProductRejectedRequestVO): __Observable<__StrictHttpResponse<FileResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/products/report/generateGroup`,
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
   * Operation used to generate the pricelist
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @param request request
   * @return OK
   */
  generateReportGroupUsingPOST1(request: ProductRejectedRequestVO): __Observable<FileResponseVO> {
    return this.generateReportGroupUsingPOST1Response(request).pipe(
      __map(_r => _r.body as FileResponseVO)
    );
  }

  /**
   * Operation used to generate the Supervisors List
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @return OK
   */
  generateReportGroupUsingGETResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOSupervisorResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/walmart/products/report/getSupervisors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOSupervisorResponseVO>;
      })
    );
  }
  /**
   * Operation used to generate the Supervisors List
   *
   * Response Codes:<br/><br/>BUSINESS_200: Business service successfully executed.<br/>BUSINESS_500: Database error.
   * @return OK
   */
  generateReportGroupUsingGET(): __Observable<ZeusResponseVOSupervisorResponseVO> {
    return this.generateReportGroupUsingGETResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOSupervisorResponseVO)
    );
  }

  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: File didn't send .
   * @return OK
   */
  sendFileUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOProductRejectedReportResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/products/sendFile`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOProductRejectedReportResponseVO>;
      })
    );
  }
  /**
   * Operation used to search a branch
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: File didn't send .
   * @return OK
   */
  sendFileUsingPOST(): __Observable<ZeusResponseVOProductRejectedReportResponseVO> {
    return this.sendFileUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOProductRejectedReportResponseVO)
    );
  }

  /**
   * Operation used to search Product
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the product with description  not  exists.
   * @param productRejectedVO productRejectedVO
   * @return OK
   */
  productRejectedVOUsingPOSTResponse(productRejectedVO: ProductRejectedVO): __Observable<__StrictHttpResponse<ZeusResponseVOOperationResultResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productRejectedVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/products/walmart/productsRejected`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOOperationResultResponseVO>;
      })
    );
  }
  /**
   * Operation used to search Product
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_002: the product with description  not  exists.
   * @param productRejectedVO productRejectedVO
   * @return OK
   */
  productRejectedVOUsingPOST(productRejectedVO: ProductRejectedVO): __Observable<ZeusResponseVOOperationResultResponseVO> {
    return this.productRejectedVOUsingPOSTResponse(productRejectedVO).pipe(
      __map(_r => _r.body as ZeusResponseVOOperationResultResponseVO)
    );
  }
}

module ProductsRestService {
}

export { ProductsRestService }
