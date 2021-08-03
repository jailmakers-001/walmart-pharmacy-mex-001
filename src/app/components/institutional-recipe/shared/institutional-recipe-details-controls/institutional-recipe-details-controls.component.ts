import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pageOptions } from '../../model/pageOptions';

@Component({
  selector: 'app-institutional-recipe-details-controls',
  templateUrl: './institutional-recipe-details-controls.component.html',
  styleUrls: ['./institutional-recipe-details-controls.component.scss']
})
export class InstitutionalRecipeDetailsControlsComponent implements OnInit {

  @Input('pageOptions-param') pageOptions: pageOptions[][];
  @Input('enableControls-param') enableControls: boolean;
  @Output('currentTab-param') $currentTab: EventEmitter<number>;
  currentTab: number = 1;
  currentPage: number = 1;
  constructor() { 
    this.$currentTab = new EventEmitter();
    this.$currentTab.emit(1);
  }

  ngOnInit(): void {
  }

  /**
   * change tab
   * @author Walmart Mexico SIF Pharmacy project
  */
  changeTab(tab) {
    this.currentTab = tab;
    this.$currentTab.emit(tab)
  }

  /**
   * change up current page
   * @author Walmart Mexico SIF Pharmacy project
  */
  changeUpPage() {
    this.currentPage += 1;
  }

  /**
  * change down current page
  * @author Walmart Mexico SIF Pharmacy project
  */
  changeDownPage() {
    this.currentPage -= 1;
  }

}
