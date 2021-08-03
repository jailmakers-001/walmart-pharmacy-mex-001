/* tslint:disable */
import { BusinessResponseVOListCatMedicineVO } from './business-response-volist-cat-medicine-vo';
import { PaginationResponseVO } from './pagination-response-vo';
import { ZeusHeaderResponseVO } from './zeus-header-response-vo';
export interface ZeusResponseVOListCatMedicineVO {
  businessResponse?: BusinessResponseVOListCatMedicineVO;
  paginationResponse?: PaginationResponseVO;
  zeusHeaderResponse?: ZeusHeaderResponseVO;
}
