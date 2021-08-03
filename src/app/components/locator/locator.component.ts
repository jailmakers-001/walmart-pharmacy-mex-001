import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearStoreVO } from 'sif-api-client';
import { LatLngBounds } from '@agm/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-locator',styles: [`
  agm-map {
    height: 300px;
  }
`],
template: `
<agm-map [latitude]="lat" [longitude]="lng"></agm-map>
`
})
export class LocatorComponent implements OnInit {
  nearStores: NearStoreVO[];
  latLngBounds: LatLngBounds;
  lat = +this.app.store.latitude
  lng = +this.app.store.longitude
  constructor(private actRoute: ActivatedRoute, private app: AppService){}
  ngOnInit(){
    this.actRoute.data.subscribe(({ nearStores }) => this.nearStores = nearStores)
  }
  setCenter(lat: number, lng: number, _fit = true) {
    console.log(lat,lng);
    
    // this.lat = lat;
    // this.lng = lng;
    // if (this.agmap) {
    //   this.agmap.triggerResize(true);
    // }
    // this.setBounds();
  }
}
