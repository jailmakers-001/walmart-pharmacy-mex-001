import { RefundPrescriptionResponseVO } from 'sif-api-client/lib/models/refund-prescription-response-vo';

export interface IRReturn{
    clientProfileData: RefundPrescriptionResponseVO;
    ticket: string;
    determinant: string;
};