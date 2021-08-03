/* tslint:disable */
import { BusinessResponseVOAccessLogReportResponse } from './business-response-voaccess-log-report-response';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOAccessLogReportResponse {
  businessResponse?: BusinessResponseVOAccessLogReportResponse;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
