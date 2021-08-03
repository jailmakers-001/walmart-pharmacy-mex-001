import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  constructor() { }

  /**
  * Download Base64 file
  * @author Walmart Mexico SIF Pharmacy project
  */
  downloadFile(base64: string, fileName: string, mimeType: string) {
    const element = document.createElement('a');
    const blob = this.base64toblob(base64, mimeType)
    const url = URL.createObjectURL(blob);
    element.setAttribute('href', url);
    element.setAttribute('download', fileName);
    element.click();
  }

  /**
   * Download Base64 file and open in other Window
   * @author Walmart Mexico SIF Pharmacy project
  */
  openFileInOtherWindow(base64: string, fileName: string, mimeType: string){
    const element = document.createElement('a');
    const blob = this.base64toblob(base64, mimeType)
    const url = URL.createObjectURL(blob);
    window.open(url);
  }
  
  base64toblob(base64, contentType: string, sliceSize: number = 512) {
    const byteCharacters = atob(base64);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });;
  }
}
