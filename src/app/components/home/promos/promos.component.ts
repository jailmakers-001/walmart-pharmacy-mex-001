import { Component, Input } from '@angular/core';
import { ProductPromotions } from '../../promotions/promotions.resolver';

@Component({
  selector: 'home-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.scss']
})
export class PromosComponent {
  @Input('promotions') promotions: ProductPromotions[];
}
