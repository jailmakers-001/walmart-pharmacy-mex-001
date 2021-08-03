export interface ShoppingBasketItem {
    id: number,
    name: string, //brand
    upc: string,
    eanCode: string,
    laboratory: string,
    category: string, //medicineTypeDescription 
    image: string,
    price: number,
    qty: number,
    stock: number
}