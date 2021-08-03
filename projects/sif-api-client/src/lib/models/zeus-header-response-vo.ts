/* tslint:disable */
import { Errors } from './errors';
export interface ZeusHeaderResponseVO {
  businessResponseCode?: string;
  errors?: Errors;
  httpStatusCode?: number;
  operationCode?: string;
  responseDate?: string;
  responseDescription?: string;
  responseTime?: number;
  stacktrace?: string;
}
