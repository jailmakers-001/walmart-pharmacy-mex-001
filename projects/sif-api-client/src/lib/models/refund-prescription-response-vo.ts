/* tslint:disable */
import { WeeMedicineVO } from './wee-medicine-vo';
export interface RefundPrescriptionResponseVO {
  clientAmount?: number;
  financerAmount?: number;
  folio?: string;
  medicines?: Array<WeeMedicineVO>;
  message?: string;
  totalAmount?: number;
  valid?: boolean;
}
