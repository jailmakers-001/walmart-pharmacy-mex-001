import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BatchExpirationComponent } from './batch-expiration/batch-expiration.component';
@Component({
  selector: 'app-batch-expiration-container',
  template: ``
})
export class BatchExpirationContainerComponent implements OnInit {

  constructor(dialog: MatDialog) { 
    const dialogRef = dialog.open(BatchExpirationComponent, { height: '628px', width: '613px', autoFocus: false });
  }

  ngOnInit(): void {
  }

}
