import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { PromotionsComponent } from './promotions/promotions.component';
import { TextPredictComponent } from './text-predict/text-predict.component';

@NgModule({
  declarations: [
    PromotionsComponent,
    TextPredictComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromotionsComponent,
    TextPredictComponent
  ]
})
export class SkeletonPlaceholderModule { }
