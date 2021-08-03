/* tslint:disable */
import { DoctorInformationVO } from './doctor-information-vo';
import { RecetaVO } from './receta-vo';
export interface RecetaResponseVO {
  codError?: string;
  doctorInformation?: DoctorInformationVO;
  medicamentos?: Array<RecetaVO>;
  msgError?: string;
}
