import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PatRestService } from 'sif-api-client';
import { map } from 'rxjs/operators';
export interface ProductPromotions {
    description: string;
    largeDescription: string;
    price: string;
    upc: string;
    brand: string;
    promotion: string;
    image: string;
}
@Injectable({ providedIn: 'root' })
export class PromotionsResolver implements Resolve<ProductPromotions[]> {
    constructor(private pat: PatRestService) { }
    resolve(): Observable<ProductPromotions[]> {
        return this.pat.getPromotionsUsingPOST().pipe(map(this.mappedResponse))
    }
    mappedResponse(data): ProductPromotions[] {
        const products = JSON.parse(data).Products;
        return products ? products.map(item => ({
            description: item.LargeDescription,
            largeDescription: item.DescriptionDisplay,
            price: item.PrecioNumerico,
            upc: item.Upc,
            brand: item.Brand,
            promotion: item.PromotionDescription,
            image: 'https://www.superama.com.mx/'+item.ImageUrl
        })): [];
    }
}