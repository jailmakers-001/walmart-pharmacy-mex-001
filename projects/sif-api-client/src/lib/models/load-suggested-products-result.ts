/* tslint:disable */
import { Product } from './product';
import { SuggestedProduct } from './suggested-product';
import { FatalError } from './fatal-error';
export interface LoadSuggestedProductsResult {
  duplicatedProducts?: Array<Product>;
  duplicatedSuggestedProducts?: Array<SuggestedProduct>;
  errorsPresent?: boolean;
  fatalError?: FatalError;
  invalidEanProducts?: Array<Product>;
  invalidEansSuggestedProducts?: Array<SuggestedProduct>;
  invalidFormatEanProducts?: Array<Product>;
  invalidFormatEansSuggestedProducts?: Array<SuggestedProduct>;
  saved?: number;
}
