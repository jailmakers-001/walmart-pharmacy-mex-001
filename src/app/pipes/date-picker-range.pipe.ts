import { Pipe, PipeTransform } from '@angular/core';
import { SatDatepickerRangeValue } from 'saturn-datepicker';
import { format } from 'date-fns'
import { es } from 'date-fns/esm/locale'

@Pipe({
  name: 'datePickerRange'
})
  /**
   * return range date in format dd/mm/yyyy
   * @author Walmart Mexico SIF Pharmacy project
  */
export class DatePickerRangePipe implements PipeTransform {
  dateFormat:string = 'dd / MM / yyy';
  datePlaceHolder:string = '--/--/----';
  transform(datePickerRange: SatDatepickerRangeValue<Date>, type:string): string {
    if (datePickerRange){
      switch(type){
        case 'begin':
          let begin = this.format(datePickerRange.begin);
          return begin;
        case 'end':
          let end = this.format(datePickerRange.end);
          return end;
      }
    }else{
      return this.datePlaceHolder;
    }
  }

  /**
   * use date-fns to format date
   * @docs https://date-fns.org/v2.12.0/docs/format
   * @author Walmart Mexico SIF Pharmacy project
  */
  format(date:Date){
    return format(date, this.dateFormat, { locale: es });
  }

}
