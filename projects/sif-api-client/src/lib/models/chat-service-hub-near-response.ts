/* tslint:disable */
import { HubStoreVO } from './hub-store-vo';
import { NearStoreVO } from './near-store-vo';
export interface ChatServiceHubNearResponse {
  hubStore?: HubStoreVO;
  nearStores?: Array<NearStoreVO>;
}
