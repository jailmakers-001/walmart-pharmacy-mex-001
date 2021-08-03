/* tslint:disable */
import { FulfillmentDetailVO } from './fulfillment-detail-vo';
export interface FulfillmentVO {
  detail?: Array<FulfillmentDetailVO>;
  determinantName?: string;
  determinantNumber?: string;
  formatType?: string;
  jobCode?: string;
  jobName?: string;
  registerDate?: string;
  userId?: string;
  userName?: string;
}
