import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { PharmaSearchRestImplService, ProductInfoResponseVO, ProductInfoVO } from 'sif-api-client';
import { AppService, } from '../../services/app.service';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ProductsResolver implements Resolve<ProductInfoResponseVO> {
    constructor(private app: AppService, private pharma: PharmaSearchRestImplService) { }

    resolve(): Observable<ProductInfoResponseVO> {
        const { storeNumber: determinant } = this.app.store
        const { name: criteria, id } = this.app.search;
        if (id === 9999999)
            return this.pharma.catalogUsingPOST({ brand: criteria, determinant }).
                pipe(map(response => this.addCofepris(response.businessResponse.data) ))

        return this.pharma.getProductsByBrandOrSustanceUsingPOST({ criteria, determinant }).
            pipe(map(response =>  this.addCofepris(response.businessResponse.data)))

    }
    addCofepris(data: ProductInfoResponseVO) {
        const { products } = data;
        return {
            ...data, products: products.map(item => ({ ...item, cofepris: item.activeSubstances.find(item => item.indexOf('RANITIDINA') !== -1) ? true : false }))
        }
    }
}