/* tslint:disable */
import { PrepareMedicineResultVO } from './prepare-medicine-result-vo';
export interface PreparePrescriptionResultVO {
  clientAmount?: number;
  financerAmount?: number;
  medicines?: Array<PrepareMedicineResultVO>;
  message?: string;
  totalAmount?: number;
  valid?: boolean;
}
