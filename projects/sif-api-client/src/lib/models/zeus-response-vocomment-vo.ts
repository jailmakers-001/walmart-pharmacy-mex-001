/* tslint:disable */
import { BusinessResponseVOCommentVO } from './business-response-vocomment-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOCommentVO {
  businessResponse?: BusinessResponseVOCommentVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
