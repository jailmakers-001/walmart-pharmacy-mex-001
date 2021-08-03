import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlexPosList } from '@components/shopping-basket/models/flex-pos-list';
import { AlertService } from '@services/alert.service';
import { DownloadFileService } from '@services/download-file.service';
import { ImageThemingService } from '@services/image-theming.service';
import { ShoppingBasketService } from '@services/shopping-basket.service';
import { FlexPosPdfRequestVO, FlexPosRestService } from 'sif-api-client';

@Component({
  selector: 'app-flex-pos',
  templateUrl: './flex-pos.component.html',
  styleUrls: ['./flex-pos.component.scss']
})
export class FlexPOSComponent implements OnInit {

  processAsset:string;

  constructor(
    public dialogRef: MatDialogRef<FlexPOSComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FlexPosList,
    private imageThemingService: ImageThemingService,
    private flexPostService: FlexPosRestService,
    private alertService: AlertService,
    private downloadFileService: DownloadFileService,
    private shoppingBasketService: ShoppingBasketService
  ) { }

  ngOnInit(): void {
  }

  printPdf(){
    const data: FlexPosPdfRequestVO = {
      upc: this.data.upc
    }
    this.flexPostService
    .getPdfUsingPOST(data)
    .subscribe( data =>{
      const fileName = 'Flex.pdf';
      const fileMime = 'application/pdf';
      if(data.valid){
        this.downloadFileService.openFileInOtherWindow(data.file, fileName, fileMime);
      } else{
        this.alertService.error(data.message);
      }
    })

  }

  /**
   * trigger close dialog action
   * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog() {
    this.dialogRef.close();
    this.shoppingBasketService.emptyShoppingBasket();//empty and go to index
  }

}
