/* tslint:disable */
import { ParticularBasketMedicineVO } from './particular-basket-medicine-vo';
export interface ParticularBasketVO {
  date?: string;
  determinant?: string;
  id?: number;
  medicines?: Array<ParticularBasketMedicineVO>;
  prescriptionType?: string;
  status?: string;
  ticketDtTime?: string;
  ticketNumTc?: string;
  ticketTeNum?: string;
  ticketTrNum?: string;
  totalSales?: string;
  user?: string;
}
