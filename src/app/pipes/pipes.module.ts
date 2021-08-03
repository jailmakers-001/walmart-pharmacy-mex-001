import { NgModule } from '@angular/core';
import { PricePipe } from './price.pipe';
import { DatePickerRangePipe } from './date-picker-range.pipe';
import { PromotionPricePipe } from './promotion-price.pipe';
import { AmountPipe } from './amount.pipe';

@NgModule({
  declarations: [
    PricePipe, 
    DatePickerRangePipe, 
    PromotionPricePipe, 
    AmountPipe
  ],
  exports: [
    PricePipe, 
    DatePickerRangePipe, 
    PromotionPricePipe,
    AmountPipe
  ]
})
export class PipesModule { }

