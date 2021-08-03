import { Injectable } from '@angular/core';
import { StoreVO, PharmaSearchVO } from 'sif-api-client';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment';

const storeForDev = { "municipalityName": "MIGUEL HIDALGO", "municipalityId": "MX09016", "stateName": "CIUDAD DE MEXICO", "stateId": "MX09", "longitude": "-99.217789", "latitude": "19.450253", "zipCode": "11220", "address": "BLVD MANUEL AVILA CAMACHO  64", "businessFormatShort": "SCE", "businessFormat": "SUPERCENTER", "name": "SC TOREO", "storeNumber": "2344", "businessFormatId": "MXA1" }
const searchForDev = {"name":"aspirina"};
declare const window: any;
declare const igetip: any;
@Injectable({
  providedIn: 'root'
})
export class AppService {
  store: StoreVO;
  search: PharmaSearchVO;
  ipAddress:any;
  suggest:string;
  public ip: string;
  constructor(private http: HttpClient){
    
  }

  /**
   * @author Walmart Mexico SIF Pharmacy project
  */
  getIPAddress() {
    this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
    return this.ipAddress;
  }

  getIp() {
    let RTCPeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection;
    if (!RTCPeerConnection) {
      const win = igetip.contentWindow;
      if (win) {
        RTCPeerConnection =
          win.RTCPeerConnection ||
          win.mozRTCPeerConnection ||
          win.webkitRTCPeerConnection;
      }
    }
    const mediaConstraints = { optional: [{ RtpDataChannels: true }] };
    const servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }], sdpSemantics: 'plan-b' };
    if (RTCPeerConnection) {
      const pc = new RTCPeerConnection(servers, mediaConstraints);
      pc.onicecandidate = ice => {
        if (ice.candidate) {
          const ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
          if (ip_regex.exec(ice.candidate.candidate)) {
            this.ip = ip_regex.exec(ice.candidate.candidate)[1];
          }
        }
      };
      pc.createDataChannel("");
      pc.createOffer().then(result => {
        pc.setLocalDescription(result);
      },
        () => { }
      );
    }
  }

  /**
   * determine current theme brand format for determinant
   * @author Walmart Mexico SIF Pharmacy project
  */
  getDeterminantFormat() {
    let currentDeterminant;
    const businessFormat = this.store.businessFormat;
    switch (businessFormat) {
      case 'SUPERCENTER':
        currentDeterminant = 'walmart';
        break;
      case 'SUPERAMA':
        currentDeterminant = 'superama';
        break;
      case 'MI BODEGA':
      case 'BODEGA':
      case 'BODEGA AURRERA EXPRESS':
        currentDeterminant = 'bodega-aurrera';
        break;
      case 'SAMS':
        currentDeterminant = 'sams-club';
        break;
      default:
        currentDeterminant = 'walmart';
        break;
    }
    return currentDeterminant;
  }

  /**
   * get PAT support for current determinant
   * @author Walmart Mexico SIF Pharmacy project
  */
  getPatAvailability(){
    return this.store.pat;
  }

}
