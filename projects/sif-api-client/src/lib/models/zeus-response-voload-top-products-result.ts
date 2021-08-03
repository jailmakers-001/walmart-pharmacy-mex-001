/* tslint:disable */
import { BusinessResponseVOLoadTopProductsResult } from './business-response-voload-top-products-result';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOLoadTopProductsResult {
  businessResponse?: BusinessResponseVOLoadTopProductsResult;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
