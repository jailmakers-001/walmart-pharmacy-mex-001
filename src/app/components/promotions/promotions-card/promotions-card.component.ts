import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotions-card',
  templateUrl: './promotions-card.component.html',
  styleUrls: ['./promotions-card.component.scss']
})
export class PromotionsCardComponent implements OnInit {

  @Input('promos-param') Promos;
  @Input('location-param') location;
  constructor() { }

  ngOnInit(): void {
  }

}
