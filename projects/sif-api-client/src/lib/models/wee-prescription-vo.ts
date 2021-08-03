/* tslint:disable */
import { WeeMedicineVO } from './wee-medicine-vo';
import { ItemArrayVO } from './item-array-vo';
export interface WeePrescriptionVO {
  amount?: number;
  client?: string;
  clientAmount?: number;
  copay?: boolean;
  dateTime?: string;
  financer?: string;
  financerAmount?: number;
  folio?: string;
  medicines?: Array<WeeMedicineVO>;
  message?: string;
  policy?: string;
  prescriptionDate?: string;
  referenceNumber?: string;
  selected?: Array<ItemArrayVO>;
  status?: string;
  step?: number;
  totalAmount?: number;
  valid?: boolean;
}
