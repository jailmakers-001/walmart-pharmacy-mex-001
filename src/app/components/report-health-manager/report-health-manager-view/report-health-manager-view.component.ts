import { Component, OnInit } from '@angular/core';
import { FulfillmentRestService } from 'sif-api-client';
import { AppService } from 'src/app/services/app.service';
import { AlertService } from 'src/app/services/alert.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SatDatepickerRangeValue } from 'saturn-datepicker';
import { format, isToday } from 'date-fns'
@Component({
  selector: 'app-report-health-manager-view',
  templateUrl: './report-health-manager-view.component.html',
  styleUrls: ['./report-health-manager-view.component.scss']
})
export class ReportHealthManagerViewComponent implements OnInit {
  today:Date = new Date();
  endTodayError: boolean;
  date: any;
  inlineRange: SatDatepickerRangeValue<Date>;
  minDate: Date;
  maxDate: Date;
  reportHealthForm: FormGroup;
  constructor( private ful: FulfillmentRestService,
               private app: AppService,
               private alert: AlertService,
               private dialogRef: MatDialogRef<ReportHealthManagerViewComponent> ){ 

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear - 2, 1, 0);
    this.maxDate = new Date(currentYear + 0, currentMonth, currentDay);

    this.reportHealthForm = new FormGroup({
      'userReportField': new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void { 
    
  }
  
  sendReport() {
    const { store: { storeNumber: determinant } } = this.app;
    const user = this.reportHealthForm.controls.userReportField.value;
    const beginDate = format(this.inlineRange.begin, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const endDate = format(this.inlineRange.end, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const reportData = { 
      determinant, 
      user, 
      beginDate,
      endDate
    };
    this.ful
      .healthOfficerNotificationUsingPOST( reportData )
        .subscribe(response => {
          const { valido, message } = response;
          this.alert.show(message, valido)
          this.dialogRef.close()
        })
  }

  onInlineRangeChange($event){
    this.inlineRange = $event;
    if (!isToday(this.inlineRange.end)){
      this.endTodayError = true;
    }else{
      this.endTodayError = false;
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
