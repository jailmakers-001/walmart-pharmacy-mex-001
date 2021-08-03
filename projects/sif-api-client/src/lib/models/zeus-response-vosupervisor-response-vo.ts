/* tslint:disable */
import { BusinessResponseVOSupervisorResponseVO } from './business-response-vosupervisor-response-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOSupervisorResponseVO {
  businessResponse?: BusinessResponseVOSupervisorResponseVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
