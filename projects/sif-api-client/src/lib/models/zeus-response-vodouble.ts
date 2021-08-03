/* tslint:disable */
import { BusinessResponseVODouble } from './business-response-vodouble';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVODouble {
  businessResponse?: BusinessResponseVODouble;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
