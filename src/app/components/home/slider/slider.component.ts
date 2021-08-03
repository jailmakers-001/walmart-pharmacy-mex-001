import { Component, Input } from '@angular/core';
import { ProductPromotions } from '../../promotions/promotions.resolver';

@Component({
  selector: 'home-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input('promotions') promotions: ProductPromotions[];
}
