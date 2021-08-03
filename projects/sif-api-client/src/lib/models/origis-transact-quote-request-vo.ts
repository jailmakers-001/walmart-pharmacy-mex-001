/* tslint:disable */
import { TransactionItemsVO } from './transaction-items-vo';
export interface OrigisTransactQuoteRequestVO {
  cardNumber?: string;
  employeeId?: string;
  posId?: string;
  storeId?: string;
  transactionId?: string;
  transactionItems?: string;
  transactionItemsVO?: Array<TransactionItemsVO>;
}
