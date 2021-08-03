/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { SifApiClientConfiguration as __Configuration } from '../sif-api-client-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ZeusResponseVORegistraDatosElegibilidadResponse } from '../models/zeus-response-voregistra-datos-elegibilidad-response';
import { RegistraDatosElegibilidadRequestVO } from '../models/registra-datos-elegibilidad-request-vo';
import { ZeusResponseVORegistrarMedicamentosResponseVO } from '../models/zeus-response-voregistrar-medicamentos-response-vo';
import { RegistrarMedicamentosRequestVO } from '../models/registrar-medicamentos-request-vo';
import { ZeusResponseVOResultadoEjecucionTrx3 } from '../models/zeus-response-voresultado-ejecucion-trx-3';
import { PrescriptionTrx3VO } from '../models/prescription-trx-3vo';
import { ZeusResponseVOResponseEjecutaTrx04VO } from '../models/zeus-response-voresponse-ejecuta-trx-04vo';
import { PrescriptionTrx4ListVO } from '../models/prescription-trx-4list-vo';
import { ZeusResponseVOListCatMedicineVO } from '../models/zeus-response-volist-cat-medicine-vo';
import { CatMedicineRequestVO } from '../models/cat-medicine-request-vo';
import { ZeusResponseVOValidarDuplicidadRecetaResponse } from '../models/zeus-response-vovalidar-duplicidad-receta-response';
import { ValidatePrescriptionRequestVO } from '../models/validate-prescription-request-vo';

/**
 * Prescription Capture Rest Impl
 */
@Injectable({
  providedIn: 'root',
})
class PrescriptionCaptureRestImplService extends __BaseService {
  static readonly registrarElegibilidadUsingPOSTPath = '/walmart/vitamedica/elegibility/register';
  static readonly registrarMedicamentoUsingPOSTPath = '/walmart/vitamedica/medication/register';
  static readonly devolverProductoUsingPOSTPath = '/walmart/vitamedica/medicine/devolverProducto';
  static readonly ejecutaTrx04UsingPOSTPath = '/walmart/vitamedica/medicine/ejecutaTrx04';
  static readonly findMedicineUsingPOSTPath = '/walmart/vitamedica/medicine/filter';
  static readonly validatePrescriptionUsingPOSTPath = '/walmart/vitamedica/prescription/validate';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Operation used to create a new elegibility
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_003: the elegibility with id  already exists.
   * @param request request
   * @return OK
   */
  registrarElegibilidadUsingPOSTResponse(request: RegistraDatosElegibilidadRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVORegistraDatosElegibilidadResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/vitamedica/elegibility/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVORegistraDatosElegibilidadResponse>;
      })
    );
  }
  /**
   * Operation used to create a new elegibility
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_003: the elegibility with id  already exists.
   * @param request request
   * @return OK
   */
  registrarElegibilidadUsingPOST(request: RegistraDatosElegibilidadRequestVO): __Observable<ZeusResponseVORegistraDatosElegibilidadResponse> {
    return this.registrarElegibilidadUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVORegistraDatosElegibilidadResponse)
    );
  }

  /**
   * Operation used to create a new medication
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_003: the medication with id  already exists.
   * @param params The `PrescriptionCaptureRestImplService.RegistrarMedicamentoUsingPOSTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `userName`:
   *
   * - `token`:
   *
   * - `machineName`:
   *
   * @return OK
   */
  registrarMedicamentoUsingPOSTResponse(params: PrescriptionCaptureRestImplService.RegistrarMedicamentoUsingPOSTParams): __Observable<__StrictHttpResponse<ZeusResponseVORegistrarMedicamentosResponseVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;
    if (params.userName != null) __params = __params.set('userName', params.userName.toString());
    if (params.token != null) __params = __params.set('token', params.token.toString());
    if (params.machineName != null) __params = __params.set('machineName', params.machineName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/vitamedica/medication/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVORegistrarMedicamentosResponseVO>;
      })
    );
  }
  /**
   * Operation used to create a new medication
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_003: the medication with id  already exists.
   * @param params The `PrescriptionCaptureRestImplService.RegistrarMedicamentoUsingPOSTParams` containing the following parameters:
   *
   * - `request`: request
   *
   * - `userName`:
   *
   * - `token`:
   *
   * - `machineName`:
   *
   * @return OK
   */
  registrarMedicamentoUsingPOST(params: PrescriptionCaptureRestImplService.RegistrarMedicamentoUsingPOSTParams): __Observable<ZeusResponseVORegistrarMedicamentosResponseVO> {
    return this.registrarMedicamentoUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ZeusResponseVORegistrarMedicamentosResponseVO)
    );
  }

  /**
   * Operation used to find medicines
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param prescriptionTrx3VO prescriptionTrx3VO
   * @return OK
   */
  devolverProductoUsingPOSTResponse(prescriptionTrx3VO: PrescriptionTrx3VO): __Observable<__StrictHttpResponse<ZeusResponseVOResultadoEjecucionTrx3>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = prescriptionTrx3VO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/vitamedica/medicine/devolverProducto`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOResultadoEjecucionTrx3>;
      })
    );
  }
  /**
   * Operation used to find medicines
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param prescriptionTrx3VO prescriptionTrx3VO
   * @return OK
   */
  devolverProductoUsingPOST(prescriptionTrx3VO: PrescriptionTrx3VO): __Observable<ZeusResponseVOResultadoEjecucionTrx3> {
    return this.devolverProductoUsingPOSTResponse(prescriptionTrx3VO).pipe(
      __map(_r => _r.body as ZeusResponseVOResultadoEjecucionTrx3)
    );
  }

  /**
   * Operation used to find medicines
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param prescriptionTrx4ListVO prescriptionTrx4ListVO
   * @return OK
   */
  ejecutaTrx04UsingPOSTResponse(prescriptionTrx4ListVO: PrescriptionTrx4ListVO): __Observable<__StrictHttpResponse<ZeusResponseVOResponseEjecutaTrx04VO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = prescriptionTrx4ListVO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/vitamedica/medicine/ejecutaTrx04`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOResponseEjecutaTrx04VO>;
      })
    );
  }
  /**
   * Operation used to find medicines
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param prescriptionTrx4ListVO prescriptionTrx4ListVO
   * @return OK
   */
  ejecutaTrx04UsingPOST(prescriptionTrx4ListVO: PrescriptionTrx4ListVO): __Observable<ZeusResponseVOResponseEjecutaTrx04VO> {
    return this.ejecutaTrx04UsingPOSTResponse(prescriptionTrx4ListVO).pipe(
      __map(_r => _r.body as ZeusResponseVOResponseEjecutaTrx04VO)
    );
  }

  /**
   * Operation used to find medicines
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `PrescriptionCaptureRestImplService.FindMedicineUsingPOSTParams` containing the following parameters:
   *
   * - `catMedicineVO`: catMedicineVO
   *
   * - `userName`:
   *
   * - `token`:
   *
   * - `machineName`:
   *
   * @return OK
   */
  findMedicineUsingPOSTResponse(params: PrescriptionCaptureRestImplService.FindMedicineUsingPOSTParams): __Observable<__StrictHttpResponse<ZeusResponseVOListCatMedicineVO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.catMedicineVO;
    if (params.userName != null) __params = __params.set('userName', params.userName.toString());
    if (params.token != null) __params = __params.set('token', params.token.toString());
    if (params.machineName != null) __params = __params.set('machineName', params.machineName.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/vitamedica/medicine/filter`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOListCatMedicineVO>;
      })
    );
  }
  /**
   * Operation used to find medicines
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.
   * @param params The `PrescriptionCaptureRestImplService.FindMedicineUsingPOSTParams` containing the following parameters:
   *
   * - `catMedicineVO`: catMedicineVO
   *
   * - `userName`:
   *
   * - `token`:
   *
   * - `machineName`:
   *
   * @return OK
   */
  findMedicineUsingPOST(params: PrescriptionCaptureRestImplService.FindMedicineUsingPOSTParams): __Observable<ZeusResponseVOListCatMedicineVO> {
    return this.findMedicineUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ZeusResponseVOListCatMedicineVO)
    );
  }

  /**
   * Operation used to create a new prescription
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_003: the prescription with id  already exists.
   * @param request request
   * @return OK
   */
  validatePrescriptionUsingPOSTResponse(request: ValidatePrescriptionRequestVO): __Observable<__StrictHttpResponse<ZeusResponseVOValidarDuplicidadRecetaResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = request;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/walmart/vitamedica/prescription/validate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ZeusResponseVOValidarDuplicidadRecetaResponse>;
      })
    );
  }
  /**
   * Operation used to create a new prescription
   *
   * Response Codes:<br/><br/>BUSINESS_001: Business service successfully executed.<br/>BUSINESS_003: the prescription with id  already exists.
   * @param request request
   * @return OK
   */
  validatePrescriptionUsingPOST(request: ValidatePrescriptionRequestVO): __Observable<ZeusResponseVOValidarDuplicidadRecetaResponse> {
    return this.validatePrescriptionUsingPOSTResponse(request).pipe(
      __map(_r => _r.body as ZeusResponseVOValidarDuplicidadRecetaResponse)
    );
  }
}

module PrescriptionCaptureRestImplService {

  /**
   * Parameters for registrarMedicamentoUsingPOST
   */
  export interface RegistrarMedicamentoUsingPOSTParams {

    /**
     * request
     */
    request: RegistrarMedicamentosRequestVO;
    userName?: string;
    token?: string;
    machineName?: string;
  }

  /**
   * Parameters for findMedicineUsingPOST
   */
  export interface FindMedicineUsingPOSTParams {

    /**
     * catMedicineVO
     */
    catMedicineVO: CatMedicineRequestVO;
    userName?: string;
    token?: string;
    machineName?: string;
  }
}

export { PrescriptionCaptureRestImplService }
