import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, type: string): string {
    if(value){
      switch (type) {
        case 'simple':
          const amount = +value;
          return '$' + amount.toFixed(2);      
        default:
          return `${value}`;      
      }
    }else{
      return '$0.00';
    }
  }

}
