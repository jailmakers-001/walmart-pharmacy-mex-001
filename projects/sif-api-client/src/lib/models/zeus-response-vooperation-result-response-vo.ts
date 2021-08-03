/* tslint:disable */
import { BusinessResponseVOOperationResultResponseVO } from './business-response-vooperation-result-response-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOOperationResultResponseVO {
  businessResponse?: BusinessResponseVOOperationResultResponseVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
