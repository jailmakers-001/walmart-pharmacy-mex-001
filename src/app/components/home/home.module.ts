import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { PromosComponent } from './promos/promos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PromotionsCardModule } from '../promotions/promotions-card/promotions-card.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
// components
import { SkeletonPlaceholderModule } from '@skeleton-placeholder/skeleton-placeholder.module';

@NgModule({
  declarations: [
    SliderComponent, 
    PromosComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MatCardModule,
    MatButtonModule,
    PipesModule,
    PromotionsCardModule,
    RouterModule,
    SkeletonPlaceholderModule
  ]
})
export class HomeModule { }
