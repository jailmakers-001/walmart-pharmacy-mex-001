/* tslint:disable */
import { ActualizarMedicamentoResponse } from './actualizar-medicamento-response';
export interface RegistrarMedicamentosResponseVO {
  codError?: string;
  medicamentos?: Array<ActualizarMedicamentoResponse>;
  medicamentosValidos?: boolean;
  msjError?: string;
  recetaValida?: boolean;
}
