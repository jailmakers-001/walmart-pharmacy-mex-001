/* tslint:disable */
import { BusinessResponseVOListDoctorVo } from './business-response-volist-doctor-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOListDoctorVo {
  businessResponse?: BusinessResponseVOListDoctorVo;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
