/* tslint:disable */
import { TransactionItemsVO } from './transaction-items-vo';
export interface OrigisTransactionResponseVO {
  cardBalance?: string;
  cardItems?: string;
  cardNumber?: string;
  errorId?: string;
  invoiceMessage?: string;
  message?: string;
  saleAuthNumber?: string;
  transactionBalance?: string;
  transactionDate?: string;
  transactionId?: string;
  transactionItems?: string;
  transactionItemsVO?: Array<TransactionItemsVO>;
}
