/* tslint:disable */
import { TransactionItemsVO } from './transaction-items-vo';
export interface OrigisTransactSaleRequestVO {
  cardNumber?: string;
  employeeId?: string;
  posId?: string;
  prescId?: number;
  saleDate?: string;
  storeId?: string;
  ticketNumTc?: string;
  totalSales?: number;
  transactionId?: string;
  transactionItems?: string;
  transactionItemsVO?: Array<TransactionItemsVO>;
  user?: string;
}
