/* tslint:disable */
import { MedicamentoVO } from './medicamento-vo';
export interface RegistrarMedicamentosRequestVO {
  consultCount?: string;
  determinante?: string;
  elegNum?: string;
  medicamentos?: Array<MedicamentoVO>;
  user?: string;
}
