/* tslint:disable */
import { SpokeVO } from './spoke-vo';
export interface SpokeHubVO {
  empty?: boolean;
  hub?: boolean;
  hubNum?: string;
  spokes?: Array<SpokeVO>;
}
