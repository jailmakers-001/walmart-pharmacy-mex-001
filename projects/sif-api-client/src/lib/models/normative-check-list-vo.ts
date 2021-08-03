/* tslint:disable */
import { ActionPlanActivityVO } from './action-plan-activity-vo';
import { ConceptRatingVO } from './concept-rating-vo';
export interface NormativeCheckListVO {
  actNumber?: string;
  activities?: Array<ActionPlanActivityVO>;
  closeReason?: string;
  closeType?: string;
  commitmentDate?: string;
  criteriaStatus?: string;
  districtName?: string;
  healthManager?: string;
  healthManagerType?: string;
  lastVisitDate?: string;
  leaderName?: string;
  managerName?: string;
  purpose?: string;
  ratingColor?: string;
  ratings?: Array<ConceptRatingVO>;
  secureMedicine?: string;
  statusColor?: string;
  statusVisit?: string;
  storeName?: string;
  storeNumber?: string;
  storeReleased?: boolean;
  supervisorName?: string;
  supervisorObservation?: string;
  textColor?: string;
  totalPoints?: string;
  type?: string;
  visitDate?: string;
  visitId?: number;
  visitScope?: string;
  year?: string;
}
