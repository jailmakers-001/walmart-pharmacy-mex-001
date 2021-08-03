/* tslint:disable */
import { MedicalScheduleVO } from './medical-schedule-vo';
export interface ExternalMedicalVO {
  absent?: string;
  determinantNum?: string;
  fullName?: string;
  lunchHour?: number;
  medicalId?: number;
  medicalType?: string;
  observation?: string;
  professionalId?: string;
  schedule?: Array<MedicalScheduleVO>;
  shiftType?: string;
  status?: string;
  userName?: string;
  userPwd?: string;
  vendorDesc?: string;
  workDay?: string;
  workDayDesc?: string;
}
