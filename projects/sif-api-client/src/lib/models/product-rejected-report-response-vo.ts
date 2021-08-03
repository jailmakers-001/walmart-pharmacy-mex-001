/* tslint:disable */
import { ProductRejectedVO } from './product-rejected-vo';
export interface ProductRejectedReportResponseVO {
  code?: string;
  message?: string;
  productRejects?: Array<ProductRejectedVO>;
}
