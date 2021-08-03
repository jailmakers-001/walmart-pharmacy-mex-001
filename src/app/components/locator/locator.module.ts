import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocatorRoutingModule } from './locator-routing.module';
import { LocatorComponent } from './locator.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'environment';


@NgModule({
  declarations: [LocatorComponent],
  imports: [
    CommonModule,
    LocatorRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.mapApiKey,
      region: 'MX',
      language: 'es',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ]
})
export class LocatorModule { }
