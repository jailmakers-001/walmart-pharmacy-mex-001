/* tslint:disable */
import { BusinessResponseVOListCrossSaleVO } from './business-response-volist-cross-sale-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOListCrossSaleVO {
  businessResponse?: BusinessResponseVOListCrossSaleVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
