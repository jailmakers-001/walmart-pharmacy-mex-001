/* tslint:disable */
import { BusinessResponseVOProductInfoResponseVO } from './business-response-voproduct-info-response-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOProductInfoResponseVO {
  businessResponse?: BusinessResponseVOProductInfoResponseVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
