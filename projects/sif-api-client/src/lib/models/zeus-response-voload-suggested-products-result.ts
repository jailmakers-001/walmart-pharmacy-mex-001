/* tslint:disable */
import { BusinessResponseVOLoadSuggestedProductsResult } from './business-response-voload-suggested-products-result';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOLoadSuggestedProductsResult {
  businessResponse?: BusinessResponseVOLoadSuggestedProductsResult;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
