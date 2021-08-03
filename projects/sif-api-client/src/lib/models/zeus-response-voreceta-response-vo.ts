/* tslint:disable */
import { BusinessResponseVORecetaResponseVO } from './business-response-voreceta-response-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVORecetaResponseVO {
  businessResponse?: BusinessResponseVORecetaResponseVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
