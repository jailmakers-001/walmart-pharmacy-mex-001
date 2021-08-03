/* tslint:disable */
import { BusinessResponseVOOrigisTransactionRestResponseVO } from './business-response-voorigis-transaction-rest-response-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOOrigisTransactionRestResponseVO {
  businessResponse?: BusinessResponseVOOrigisTransactionRestResponseVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
