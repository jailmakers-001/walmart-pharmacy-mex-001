/* tslint:disable */
import { BusinessResponseVOParticularBasketVO } from './business-response-voparticular-basket-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOParticularBasketVO {
  businessResponse?: BusinessResponseVOParticularBasketVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
