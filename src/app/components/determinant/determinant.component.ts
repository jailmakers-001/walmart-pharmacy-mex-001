import { Component, OnInit, HostBinding } from '@angular/core';
import { DeterminantServiceRestService, FulfillmentRestService, StoreVO, AccessLogReportRequest, AccessLogReportResponse, AccessLogRestRequest, AccessLogRestService } from "sif-api-client";
import { AppService } from '../../services/app.service';

import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-determinant',
  templateUrl: './determinant.component.html',
  styleUrls: ['./determinant.component.scss']
})
export class DeterminantComponent implements OnInit {
  searchDets = []
  makeAsk = false;
  haveLicence = true;
  store: StoreVO;
  today = new Date();
  @HostBinding('class') componentCssClass: any;
  constructor(
    private detService: DeterminantServiceRestService,
    private fulService: FulfillmentRestService,
    private appService: AppService,
    private alertService: AlertService,
    private router: Router,
    private acessLogReportService: AccessLogRestService,
    private overlayContainer: OverlayContainer
  ) { }

   ngOnInit(): void {
  }
  searchStore(storeNumber) {
    if (storeNumber.length != 4) { this.searchDets = []; return; }

    this.detService.getByNumberUsingPOST({ determinant: storeNumber }).subscribe(response => {
      const { data } = response.businessResponse;
      if (data.storeNumber) {
        this.searchDets = [data];
      } else {
        this.searchDets = [{ storeNumber: null, name: "SIN RESULTADOS" }];
      }
    })

  }
  setStore(store: StoreVO) {
    if (store.storeNumber) {
      this.store = store;
      this.makeAsk = true
    }
    const ipDefault = '0.0.0.0';
    const data = {
      determinant: this.store.storeNumber,
      ip: this.appService.ip || ipDefault
    }
    this.acessLogReportService
      .getTokenUsingPOST(data)
      .subscribe();
  }

  setTheme(){
    const currentTheme = `theme-${this.appService.getDeterminantFormat()}`;
    this.overlayContainer.getContainerElement().classList.add(currentTheme);
  }
  licence(have: boolean) {
    if (!have) { this.haveLicence = false; return; }
    this.appService.store = this.store;
    this.setTheme();
    this.router.navigate(['/home'])
  }
  report(report) {
    const reportSuccessMessage = 'El reporte se envió con exíto';
    const reportErrorMessage = 'No se pudo enviar la información. Intentalo de nuevo';
    const reportData = {
      endDate: report.date,
      reason: report.reason,
      user: report.user,
      determinant: report.determinant,
      beginDate: report.date
    };
    this.fulService.sanitaryLicenseNotificationUsingPOST(reportData).subscribe(response => {
      const { valido, message } = response;
      if (valido) {
        this.appService.store = this.store;
        this.alertService.success(reportSuccessMessage)
        this.router.navigate(['/']);
      } else {
        this.alertService.error(reportErrorMessage)
      }
    })
  }
}
