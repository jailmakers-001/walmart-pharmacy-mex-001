import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { pageOptions } from '../model/pageOptions';

@Component({
  selector: 'app-institutional-recipe-details-axa',
  templateUrl: './institutional-recipe-details-axa.component.html',
  styleUrls: ['./institutional-recipe-details-axa.component.scss']
})
export class InstitutionalRecipeDetailsAxaComponent implements OnInit {
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
        title: 'Recetas por surtir',
        icon: 'check'
      },
      {
        id: 3,
        title: 'Validación de datos de la receta',
        icon: 'playlist_add_check'
      },
      {
        id: 4,
        title: 'Formato Electrónico',
        icon: 'reorder'
      },
      {
        id: 5,
        title: 'Cobertura por clientes',
        icon: 'check_circle'
      },
      {
        id: 6,
        title: 'Validaciones Importantes',
        icon: 'announcement'
      },
      {
        id: 7,
        title: 'Credenciales',
        icon: 'credit_card'
      }
    ],
    [
      {
        id: 8,
        title: 'Autorización especial',
        icon: 'stars'
      },
      {
        id: 9,
        title: 'Llenado de receta por institución',
        icon: 'assignment_turned_in'
      },
      {
        id: 10,
        title: 'Formato con holograma',
        icon: 'loyalty'
      },
      {
        id: 11,
        title: 'Teléfonos para autorización',
        icon: 'phone'
      }
    ]
  ];

  constructor(
    private dialogRef: MatDialogRef<InstitutionalRecipeDetailsAxaComponent>) {
  }

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
