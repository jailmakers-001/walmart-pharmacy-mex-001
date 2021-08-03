/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVOString } from '../models/zeus-response-vostring';
import { ZeusResponseVOListCrossSaleVO } from '../models/zeus-response-volist-cross-sale-vo';
import { CrossSaleRequest } from '../models/cross-sale-request';
import { ZeusResponseVOLoadSuggestedProductsResult } from '../models/zeus-response-voload-suggested-products-result';
import { FileBase64Request } from '../models/file-base-64request';
import { ZeusResponseVOLoadTopProductsResult } from '../models/zeus-response-voload-top-products-result';

/**
 * Cross Sale Rest
 */
@Injectable({
  providedIn: 'root',
})
class CrossSaleRestService extends __BaseService {
  static readonly downloadSuggestedProductsCatalogUsingPOSTPath = '/walmart/crosssale/downloadSuggestedProductsCatalog';
  static readonly downloadTopProductsCatalogUsingPOSTPath = '/walmart/crosssale/downloadTopProductsCatalog';
  static readonly getDoctorUsingPOST1Path = '/walmart/crosssale/findRecomended';
  static readonly loadSuggestedProductsFromExcelUsingPOSTPath = '/walmart/crosssale/loadSuggestedProductsFromExcel';
  static readonly loadTopProductsFromExcelUsingPOSTPath = '/walmart/crosssale/loadTopProductsFromExcel';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to download suggested products catalog
   *
   * Response Codes:<br/><br/>WS-B64: Error converting to base64<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @return OK
   */
  downloadSuggestedProductsCatalogUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/crosssale/downloadSuggestedProductsCatalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOString>;
      })
    );
  }
  /**
   * Operation used to download suggested products catalog
   *
   * Response Codes:<br/><br/>WS-B64: Error converting to base64<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @return OK
   */
  downloadSuggestedProductsCatalogUsingPOST(): __Observable<ZeusResponseVOString> {
    return this.downloadSuggestedProductsCatalogUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOString)
    );
  }

  /**
   * Operation used to download top products catalog
   *
   * Response Codes:<br/><br/>WS-B64: Error converting to base64<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @return OK
   */
  downloadTopProductsCatalogUsingPOSTResponse(): __Observable<__StrictHttpResponse<ZeusResponseVOString>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/crosssale/downloadTopProductsCatalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOString>;
      })
    );
  }
  /**
   * Operation used to download top products catalog
   *
   * Response Codes:<br/><br/>WS-B64: Error converting to base64<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @return OK
   */
  downloadTopProductsCatalogUsingPOST(): __Observable<ZeusResponseVOString> {
    return this.downloadTopProductsCatalogUsingPOSTResponse().pipe(
      __map(_r => _r.body as ZeusResponseVOString)
    );
  }

  /**
   * Operation used to find recommended products
   *
   * Response Codes:<br/><br/>WS_700: Operacion exitosa.<br/>WS_701: Ean can not be null.<br/>WS_702: Determinant can not be null.<br/>WS_703: Recommended products not exist.<br/>WS_704: Error in congo module.<br/>WS_705: Congo response error.<br/>WS_706: No se encontraron productos en PLM con ese ean code
   * @param request request
   * @return OK
   */
  getDoctorUsingPOST1Response(request: CrossSaleRequest): __Observable<__StrictHttpResponse<ZeusResponseVOListCrossSaleVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/crosssale/findRecomended`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOListCrossSaleVO>;
      })
    );
  }
  /**
   * Operation used to find recommended products
   *
   * Response Codes:<br/><br/>WS_700: Operacion exitosa.<br/>WS_701: Ean can not be null.<br/>WS_702: Determinant can not be null.<br/>WS_703: Recommended products not exist.<br/>WS_704: Error in congo module.<br/>WS_705: Congo response error.<br/>WS_706: No se encontraron productos en PLM con ese ean code
   * @param request request
   * @return OK
   */
  getDoctorUsingPOST1(request: CrossSaleRequest): __Observable<ZeusResponseVOListCrossSaleVO> {
    return this.getDoctorUsingPOST1Response(request).pipe(
      __map(_r => _r.body as ZeusResponseVOListCrossSaleVO)
    );
  }

  /**
   * Operation used to load top products from Excel layout
   *
   * Response Codes:<br/><br/>WS-000: Process done succesfully.<br/>WS_821: The string file can not be null.<br/>WS_822: The string file format is not valid.<br/>WS_823: Error reading excel format.<br/>WS_824: The content data have invalid format, by example text instead numbers. Can not read from Excel<br/>WS_825: Empty file.<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @param request request
   * @return OK
   */
  loadSuggestedProductsFromExcelUsingPOSTResponse(request: FileBase64Request): __Observable<__StrictHttpResponse<ZeusResponseVOLoadSuggestedProductsResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/crosssale/loadSuggestedProductsFromExcel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOLoadSuggestedProductsResult>;
      })
    );
  }
  /**
   * Operation used to load top products from Excel layout
   *
   * Response Codes:<br/><br/>WS-000: Process done succesfully.<br/>WS_821: The string file can not be null.<br/>WS_822: The string file format is not valid.<br/>WS_823: Error reading excel format.<br/>WS_824: The content data have invalid format, by example text instead numbers. Can not read from Excel<br/>WS_825: Empty file.<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @param request request
   * @return OK
   */
  loadSuggestedProductsFromExcelUsingPOST(request: FileBase64Request): __Observable<ZeusResponseVOLoadSuggestedProductsResult> {
    return this.loadSuggestedProductsFromExcelUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOLoadSuggestedProductsResult)
    );
  }

  /**
   * Operation used to load top products from Excel layout
   *
   * Response Codes:<br/><br/>WS-000: Process done succesfully.<br/>WS_721: The string file can not be null.<br/>WS_722: The string file format is not valid.<br/>WS_725: The content data have invalid format, by example text instead numbers. Can not read from Excel<br/>WS_726: Error reading excel format.<br/>WS_727: Empty file.<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @param request request
   * @return OK
   */
  loadTopProductsFromExcelUsingPOSTResponse(request: FileBase64Request): __Observable<__StrictHttpResponse<ZeusResponseVOLoadTopProductsResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/crosssale/loadTopProductsFromExcel`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOLoadTopProductsResult>;
      })
    );
  }
  /**
   * Operation used to load top products from Excel layout
   *
   * Response Codes:<br/><br/>WS-000: Process done succesfully.<br/>WS_721: The string file can not be null.<br/>WS_722: The string file format is not valid.<br/>WS_725: The content data have invalid format, by example text instead numbers. Can not read from Excel<br/>WS_726: Error reading excel format.<br/>WS_727: Empty file.<br/>WS-DB0: DB error.<br/>WS-UNK: Unknown error
   * @param request request
   * @return OK
   */
  loadTopProductsFromExcelUsingPOST(request: FileBase64Request): __Observable<ZeusResponseVOLoadTopProductsResult> {
    return this.loadTopProductsFromExcelUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOLoadTopProductsResult)
    );
  }
}

module CrossSaleRestService {
}

export { CrossSaleRestService }
