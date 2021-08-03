import { Component, OnInit } from '@angular/core';
import { pageOptions } from '../model/pageOptions';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-institutional-recipe-details-general-de-salud',
  templateUrl: './institutional-recipe-details-general-de-salud.component.html',
  styleUrls: ['./institutional-recipe-details-general-de-salud.component.scss']
})
export class InstitutionalRecipeDetailsGeneralDeSaludComponent implements OnInit {
  currentTab: number = 1; //default value for first tab
  pageOptions: pageOptions[][] = [
    [
      {
        id: 1,
        title: 'Información general',
        icon: 'info'
      },
      {
        id: 2,
        title: 'Credenciales',
        icon: 'check'
      },
      {
        id: 3,
        title: 'Formato de receta vigente',
        icon: 'playlist_add_check'
      },
    ]
  ];

  constructor(
    private dialogRef: MatDialogRef<InstitutionalRecipeDetailsGeneralDeSaludComponent>
  ) { }

  ngOnInit(): void {
  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
  }

}
