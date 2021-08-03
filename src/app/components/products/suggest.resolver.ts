import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { TextPredictRestService } from 'sif-api-client';
import { AppService, } from '../../services/app.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SuggestResolver implements Resolve<string> {
  constructor(
    private app: AppService, 
    private textPredict: TextPredictRestService) { 
      
    }
  resolve(): Observable<string> {
    const { name: description, id } = this.app.search;
    if (this.app.search)
      return this.textPredict
        .productFindTextPredictUsingPOST({ description })
          .pipe(
            map( 
              data => {
                if(data.length){
                  const suggestedTerm = data[0].split(",")[0];
                  if (suggestedTerm !== description) {
                    return suggestedTerm;
                  } else {
                    return undefined;
                  }
                }
              }
            ));
  }
}