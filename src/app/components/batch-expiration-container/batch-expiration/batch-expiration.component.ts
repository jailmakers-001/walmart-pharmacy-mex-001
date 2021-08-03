import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SatDatepickerRangeValue } from 'saturn-datepicker';
import { format, differenceInDays } from 'date-fns';
import { AppService } from '@services/app.service';
import { DownloadFileService } from '@services/download-file.service';
import { LoteCaducidadRestService, LotStoreReportRequestVO } from 'sif-api-client';
import { AlertService } from '@services/alert.service';

@Component({
  selector: 'app-batch-expiration',
  templateUrl: './batch-expiration.component.html',
  styleUrls: ['./batch-expiration.component.scss']
})
export class BatchExpirationComponent implements OnInit {

  today: Date = new Date();
  endTodayError: boolean;
  rangeExcededError: boolean;
  date: any;
  inlineRange: SatDatepickerRangeValue<Date>;
  minDate: Date;
  maxDate: Date;
  constructor(
    private dialogRef: MatDialogRef<BatchExpirationComponent>,
    private appService: AppService,
    private donwloadFileService: DownloadFileService,
    private loteCaducidadRestService: LoteCaducidadRestService,
    private alertService: AlertService
  ) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(2017, 0, 1);
    this.maxDate = new Date(currentYear + 0, currentMonth, currentDay);
  }

  ngOnInit(): void {
  }


  /**
   * donwload batch expiration report
   * @author Walmart Mexico SIF Pharmacy project
  */
  downloadReport() {
    const beginDate = format(this.inlineRange.begin, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const endDate = format(this.inlineRange.end, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const determinant = this.appService.store.storeNumber;
    const fileDateFormat = 'dd-MM-yyy';
    const fileDate = format(new Date(), fileDateFormat);
    const fileName = `Reporte_Nota_de_Transferencia_${fileDate}.xlsx`;
    const fileMime = 'application/xlsx';
    const data: LotStoreReportRequestVO = {
      beginDate,
      endDate,
      store: +determinant
    };
    this.loteCaducidadRestService
      .getStoreReportUsingPOST(data)
      .subscribe(data => {
        if (data.valid) {
          this.alertService.success(data.message);
          this.donwloadFileService.downloadFile(data.file, fileName, fileMime);
          this.closeDialog();
        } else {
          this.alertService.error(data.message);
        }
      })
  }

  /**
   * on change range
   * @author Walmart Mexico SIF Pharmacy project
  */
  onInlineRangeChange($event: SatDatepickerRangeValue<Date>) {
    this.inlineRange = $event;
    const rangeExcededErrorMessage = 'No es posible seleccionar mas de 15 días. Verifica el rango de fechas e inténtalo nuevamente';
    const differenceDays = differenceInDays(this.inlineRange.end, this.inlineRange.begin);
    const daysRangeValid = 14; //number of days for valid range
    if (differenceDays > daysRangeValid) {
      this.alertService.error(rangeExcededErrorMessage);
      this.rangeExcededError = true;
    } else {
      this.rangeExcededError = false;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
