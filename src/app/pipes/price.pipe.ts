import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value): string {
    if (value)
      return '$' + value + ' c/u'
    return 'N/D';
  }

}
