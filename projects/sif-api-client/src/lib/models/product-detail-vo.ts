/* tslint:disable */
import { ProductAttribute } from './product-attribute';
import { CrossSaleVO } from './cross-sale-vo';
export interface ProductDetailVO {
  attributes?: Array<ProductAttribute>;
  crossSaleProducts?: Array<CrossSaleVO>;
  image?: string;
  laboratory?: string;
  name?: string;
  pharmaForm?: string;
  presentation?: string;
  price?: number;
  productType?: string;
  stock?: number;
  substance?: string;
  upc?: string;
}
