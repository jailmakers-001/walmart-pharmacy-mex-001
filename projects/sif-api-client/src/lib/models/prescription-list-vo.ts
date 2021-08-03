/* tslint:disable */
import { DatosMedicinePresc } from './datos-medicine-presc';
export interface PrescriptionListVO {
  elegNum?: string;
  emissionDate?: string;
  folioId?: string;
  medicinePrescList?: Array<DatosMedicinePresc>;
  prescType?: string;
}
