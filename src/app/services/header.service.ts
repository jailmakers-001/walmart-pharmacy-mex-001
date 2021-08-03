import { Injectable, OnInit } from '@angular/core';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _searchTermFieldValue: Subject<string> = new Subject<string>();
  private _currentLetterValue: Subject<string> = new Subject<string>();

  constructor() {
  }
  
  /**
   * empty search term field value
   * @author Walmart Mexico SIF Pharmacy project
  */
  emptySearchTermField(){
    this._searchTermFieldValue.next('');
  }

  /**
   * update search term field value
   * @author Walmart Mexico SIF Pharmacy project
  */
  updateSearchTerm(searchTerm: string){
    this._searchTermFieldValue.next(searchTerm);
  }
  
  /**
   * get search term field value
   * @author Walmart Mexico SIF Pharmacy project
  */
  getSearchTerm(){
    return this._searchTermFieldValue;
  }

  /**
   * empty current letter value
   * @author Walmart Mexico SIF Pharmacy project
  */
  emptyCurrentLetterValue() {
    this._currentLetterValue.next('');
  }

  /**
   * update current letter value
   * @author Walmart Mexico SIF Pharmacy project
  */
  updateCurrentLetterValue(currentLetter: string) {
    this._currentLetterValue.next(currentLetter);
  }

  /**
   * get current letter value
   * @author Walmart Mexico SIF Pharmacy project
  */
  getCurrentLetterValue() {
    return this._currentLetterValue;
  }
  
}
