import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PromotionsCardModule } from '../promotions/promotions-card/promotions-card.module';

//components
import { SkeletonPlaceholderModule } from '@skeleton-placeholder/skeleton-placeholder.module';

@NgModule({
  declarations: [PromotionsComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    DirectivesModule,
    PipesModule,
    PromotionsCardModule,
    SkeletonPlaceholderModule
  ]
})
export class PromotionsModule { }
