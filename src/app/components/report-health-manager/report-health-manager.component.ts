import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportHealthManagerViewComponent } from './report-health-manager-view/report-health-manager-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-health-manager',
  template: ''
})
export class ReportHealthManagerComponent {
  constructor(dialog: MatDialog, router:Router) {
    const dialogRef = dialog.open(ReportHealthManagerViewComponent, {width: '552px', autoFocus: false});
   }
}
