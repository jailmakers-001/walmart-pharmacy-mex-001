//models
import { PrepareMedicineVO } from 'sif-api-client/lib/models/prepare-medicine-vo';
import { WeeMedicineVO } from 'sif-api-client/lib/models/wee-medicine-vo';
import { WeePrescriptionVO } from 'sif-api-client/lib/models/wee-prescription-vo';

interface step{
  name: string,
  id: number
}

export interface IRElectronicValidation{
  insurerName: string,
  determinantId: string,
  ticket?: string,
  step?: string;
  token?: string,
  ticketScanned?: string,
  scannerStatus: string,
  clientProfileData: WeePrescriptionVO,
  clientSelectedMedicines: {
    app: PrepareMedicineVO[]
    service: WeeMedicineVO[]
  }  
}

export enum services{
  validation = 'validation',
  return = 'return'
}

export enum types{
  manual = 'manual',
  scanner = 'scanner'
}

export enum confirmOperationType{
  confirm = 1,
  pause = 2,
  cancel = 3
}

export enum scannerStatus{
  manual = 'manual',
  scanner = 'scanner'

}

export enum insurerNames{
  axa = 'AXA',
  general_de_salud = 'General de Salud'
}

export enum processStep{
  process_incomplete = 'process-incomplete',
  consult_ticket = 'consult-ticket',
  data_verification = 'data-verification',
  resume_of_medicines = 'resume-of-medicines',
  token_confirm = 'token-confirm',
  validation_scanner = 'validation-scanner'
}

//use it in switch case INCOMPLETE PROCEES
export const processStepIncomplete = {
  consult_ticket: {
    name: 'consult-ticket',
    id: 1
  },
  data_verification: {
    name: 'data-verification',
    id: 2
  },
  resume_of_medicines: {
    name: 'resume-of-medicines',
    id: 3
  },
  token_confirm: {
    name: 'token-confirm',
    id: 4
  },
  validation_scanner: {
    name: 'validation-scanner',
    id: 5
  },
}

export const service_validation = 'validation';
export const service_return = 'return';
export const type_manual = 'manual';
export const type_scanner = 'scanner';