/* tslint:disable */
import { BusinessResponseVODoctorVo } from './business-response-vodoctor-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVODoctorVo {
  businessResponse?: BusinessResponseVODoctorVo;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
