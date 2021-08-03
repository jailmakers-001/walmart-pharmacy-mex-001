/* tslint:disable */
import { BusinessResponseVOInstitucionRespVO } from './business-response-voinstitucion-resp-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOInstitucionRespVO {
  businessResponse?: BusinessResponseVOInstitucionRespVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
