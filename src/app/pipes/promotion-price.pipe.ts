import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'promotionPrice'
})
export class PromotionPricePipe implements PipeTransform {

  transform(value: string): string {
    return value?.replace('ONLINE', '').trim();
  }

}
