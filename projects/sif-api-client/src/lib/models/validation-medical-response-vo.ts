/* tslint:disable */
import { MedicalActivityVO } from './medical-activity-vo';
export interface ValidationMedicalResponseVO {
  activities?: Array<MedicalActivityVO>;
  completeName?: string;
  inactive?: boolean;
  lunchTime?: boolean;
  valid?: boolean;
}
