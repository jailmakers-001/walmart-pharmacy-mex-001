/* tslint:disable */
import { BusinessResponseVOListString } from './business-response-volist-string';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOListString {
  businessResponse?: BusinessResponseVOListString;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
