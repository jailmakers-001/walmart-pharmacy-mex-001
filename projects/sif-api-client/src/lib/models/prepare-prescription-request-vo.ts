/* tslint:disable */
import { PrepareMedicineVO } from './prepare-medicine-vo';
export interface PreparePrescriptionRequestVO {
  determinant?: string;
  folio?: string;
  medicines?: Array<PrepareMedicineVO>;
  operation?: number;
}
