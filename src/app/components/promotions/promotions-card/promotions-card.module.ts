import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsCardComponent } from '../promotions-card/promotions-card.component'
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    PromotionsCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    PipesModule
  ],
  exports: [
    PromotionsCardComponent
  ]
})
export class PromotionsCardModule { }
