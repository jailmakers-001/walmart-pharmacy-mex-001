/* tslint:disable */
import { EanCodePresentations } from './ean-code-presentations';
export interface ProductInfoVO {
  activeSubstances?: Array<string>;
  brand?: string;
  categoryId?: string;
  description?: string;
  divisionId?: number;
  divisionName?: string;
  divisionShortName?: string;
  eanCode?: string;
  eanCodePresentations?: Array<EanCodePresentations>;
  hasStockAndPrice?: boolean;
  id?: string;
  image?: string;
  laboratory?: string;
  medicineType?: string;
  medicineTypeDescription?: string;
  name?: string;
  pharmaForm?: string;
  pharmaFormId?: number;
  presentation?: string;
  price?: number;
  priority?: number;
  productId?: number;
  productType?: string;
  soldByWalmart?: boolean;
  stock?: number;
  substances?: string;
  upc?: string;
}
