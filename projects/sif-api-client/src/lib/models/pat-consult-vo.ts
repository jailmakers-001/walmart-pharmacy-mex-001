/* tslint:disable */
import { PatDataVO } from './pat-data-vo';
export interface PatConsultVO {
  code?: string;
  complete?: boolean;
  data?: PatDataVO;
  message?: string;
  step?: number;
  valido?: boolean;
}
