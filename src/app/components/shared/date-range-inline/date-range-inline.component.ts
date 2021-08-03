import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SatDatepickerRangeValue } from 'saturn-datepicker';

@Component({
  selector: 'app-date-range-inline',
  templateUrl: './date-range-inline.component.html',
  styleUrls: ['./date-range-inline.component.scss']
})
export class DateRangeInlineComponent implements OnInit {

  @Input('minDate') minDate: Date;
  @Input('maxDate') maxDate: Date;
  @Output('rangeChange') changeRange: EventEmitter<SatDatepickerRangeValue<Date>> = new EventEmitter<SatDatepickerRangeValue<Date>>();
  selectedDate: Date;
  
  constructor() { 

  }

  ngOnInit(): void {
  }

  onChangeRange(event$: SatDatepickerRangeValue<Date>){
    this.changeRange.emit(event$);
  }

}
