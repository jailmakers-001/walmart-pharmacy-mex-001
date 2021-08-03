/* tslint:disable */
import { PatMedicineVO } from './pat-medicine-vo';
export interface PatDataVO {
  birthYear?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  medicines?: Array<PatMedicineVO>;
  motherLastName?: string;
  phone?: string;
  postalCode?: string;
  receiveNotifications?: boolean;
}
