/* tslint:disable */
import { TopProductVO } from './top-product-vo';
export interface LoadTopProductsResult {
  duplicateProducts?: Array<TopProductVO>;
  errorsPresent?: boolean;
  invalidEans?: Array<TopProductVO>;
  invalidFormatEans?: Array<TopProductVO>;
  invalidFormatPriority?: Array<TopProductVO>;
  saved?: number;
}
