/* tslint:disable */
import { CaptureDeliveryVO } from './capture-delivery-vo';
export interface PrescriptionTrx4ListVO {
  captureDeliveryVO?: CaptureDeliveryVO;
  determinantNumber?: string;
  doctorId?: number;
  elegnum?: string;
  medPrescId?: Array<number>;
  user?: string;
}
