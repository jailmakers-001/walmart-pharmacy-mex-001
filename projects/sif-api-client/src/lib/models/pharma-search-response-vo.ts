/* tslint:disable */
import { PharmaSearchVO } from './pharma-search-vo';
export interface PharmaSearchResponseVO {
  code?: string;
  infoPharma?: Array<PharmaSearchVO>;
  message?: string;
}
