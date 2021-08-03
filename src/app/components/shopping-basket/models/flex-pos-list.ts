import { ShoppingBasketItem } from './shopping-basket-item';

export interface FlexPosList{
    items: ShoppingBasketItem[],
    shoppingBasketTotal: number,
    upc: string
}