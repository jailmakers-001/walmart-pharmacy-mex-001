/* tslint:disable */
import { BusinessResponseVOStoreVO } from './business-response-vostore-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOStoreVO {
  businessResponse?: BusinessResponseVOStoreVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
