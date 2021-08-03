/* tslint:disable */
import { BusinessResponseVOListHubStoreVO } from './business-response-volist-hub-store-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOListHubStoreVO {
  businessResponse?: BusinessResponseVOListHubStoreVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
