/* tslint:disable */
import { SupervisorVO } from './supervisor-vo';
export interface SupervisorResponseVO {
  codError?: string;
  msjError?: string;
  supervisorVO?: Array<SupervisorVO>;
}
