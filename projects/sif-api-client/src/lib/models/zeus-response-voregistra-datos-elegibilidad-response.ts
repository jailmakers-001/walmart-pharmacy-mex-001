/* tslint:disable */
import { BusinessResponseVORegistraDatosElegibilidadResponse } from './business-response-voregistra-datos-elegibilidad-response';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVORegistraDatosElegibilidadResponse {
  businessResponse?: BusinessResponseVORegistraDatosElegibilidadResponse;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
