import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DownloadFileService } from '@services/download-file.service';
import { SpokeHubVO, SpokeHubRestService, MedicineInfoVO } from 'sif-api-client';
import { AlertService } from 'src/app/services/alert.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-spoke-hub',
  templateUrl: './spoke-hub.component.html',
  styleUrls: ['./spoke-hub.component.scss']
})
export class SpokeHubComponent implements OnInit {
  orders: SpokeHubVO;
  lastUpdate: string;
  currentTheme: string;
  constructor(
    private app: AppService, 
    private router: Router, 
    private actRoute: ActivatedRoute, 
    private spokeHub: SpokeHubRestService, 
    private alert: AlertService,
    private donwloadFileService: DownloadFileService){ 

    }

  ngOnInit(): void {
    this.actRoute.data.subscribe(({ spokeHub }) => {
      if (!spokeHub) this.router.navigate(['/'])
      this.orders = spokeHub;
      if(this.orders.spokes.length){
        this.lastUpdate = this.orders.spokes[0].medicines[0].pickDate
      }
    });
    this.currentTheme = `theme-${this.app.getDeterminantFormat()}`;
  }
  download() {
    const { storeNumber } = this.app.store;
    const data = { determinant: storeNumber };
    const fileName = 'Pedidos HUB.xlsx';
    const fileMime = 'application/xlsx';
    this.spokeHub
      .getExcelUsingPOST(data)
      .subscribe(
        response => {
          this.donwloadFileService.downloadFile(response.report, fileName, fileMime);
        }, 
        error => {
          this.alert.error('No se pudo descargar el archivo de pedidos en este momento. Favor de intentar más tarde')
        }
        );
  }
  
  finalPickTotal(medicines: MedicineInfoVO[]) {
    return medicines.reduce((sum, { finalPick }) => sum + +finalPick, 0)
  }
}
