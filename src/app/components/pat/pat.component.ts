import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PatContainer } from './pat.container';

@Component({
  selector: 'app-pat',
  template: ''
})
export class PatComponent {

  constructor(dialog: MatDialog, router: Router) {
    dialog.open(PatContainer, { panelClass: 'mat-full-container',height: '500px', width: '745px' });
  }
}
