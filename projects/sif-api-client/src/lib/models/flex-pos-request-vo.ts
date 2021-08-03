/* tslint:disable */
import { FlexPosProductVO } from './flex-pos-product-vo';
export interface FlexPosRequestVO {
  items?: Array<FlexPosProductVO>;
  storeNbr?: string;
}
