/* tslint:disable */
import { BusinessResponseVOFulfillmentReportResponseVO } from './business-response-vofulfillment-report-response-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOFulfillmentReportResponseVO {
  businessResponse?: BusinessResponseVOFulfillmentReportResponseVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
