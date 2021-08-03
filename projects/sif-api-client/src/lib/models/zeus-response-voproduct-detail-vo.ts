/* tslint:disable */
import { BusinessResponseVOProductDetailVO } from './business-response-voproduct-detail-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOProductDetailVO {
  businessResponse?: BusinessResponseVOProductDetailVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
