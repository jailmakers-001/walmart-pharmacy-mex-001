/* tslint:disable */
import { BusinessResponseVOInt } from './business-response-voint';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOInt {
  businessResponse?: BusinessResponseVOInt;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
