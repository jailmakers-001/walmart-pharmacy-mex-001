/* tslint:disable */
import { FilterVO } from './filter-vo';
import { ProductInfoVO } from './product-info-vo';
export interface ProductInfoResponseVO {
  filters?: Array<FilterVO>;
  products?: Array<ProductInfoVO>;
}
