/* tslint:disable */
import { BusinessResponseVOString } from './business-response-vostring';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOString {
  businessResponse?: BusinessResponseVOString;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
