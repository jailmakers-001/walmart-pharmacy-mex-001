/* tslint:disable */
import { DatosPaciente } from './datos-paciente';
import { PrescriptionListVO } from './prescription-list-vo';
export interface ValidarDuplicidadRecetaResponse {
  codigo?: string;
  mensaje?: string;
  patient?: DatosPaciente;
  patients?: Array<DatosPaciente>;
  prescription?: PrescriptionListVO;
  prescriptionsList?: Array<PrescriptionListVO>;
}
