/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for SifApiClient services
 */
@Injectable({
  providedIn: 'root',
})
export class SifApiClientConfiguration {
  rootUrl: string = '//cerr200128:9080/sif-rest';
}

export interface SifApiClientConfigurationInterface {
  rootUrl?: string;
}
