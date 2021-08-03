/* tslint:disable */
import { BusinessResponseVOCongoVO } from './business-response-vocongo-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOCongoVO {
  businessResponse?: BusinessResponseVOCongoVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
