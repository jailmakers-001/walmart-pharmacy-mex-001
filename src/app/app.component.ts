import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SwUpdateComponent } from './components/shared/sw-update/sw-update.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sifv2';
  constructor(
    public app: AppService, 
    iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer,
    private swUpdate: SwUpdate,
    private dialog: MatDialog) {
    this.app.getIp();
    iconRegistry.addSvgIcon('doctor', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/doctor-2.svg'));
    iconRegistry.addSvgIcon('promotions', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/promotions-4.svg')); //lastest icon
    iconRegistry.addSvgIcon('dialpad', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/dialpad.svg'));
    iconRegistry.addSvgIcon('deleteProfile', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/PAT/delete.svg'));
    iconRegistry.addSvgIcon('qr-promos', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/home/qr_farmacia.svg'));
    iconRegistry.addSvgIcon('money', sanitizer.bypassSecurityTrustResourceUrl('assets/icon/institutional-recipe/icon_money.svg'));
  }
  ngOnInit(): void {
    this.checkServiceWorkerUpdate();
  }

  /**
   * check for service-worker updates
   * if update exist and is applied by user then refresh tab
   * @author Walmart Mexico SIF Pharmacy project
  */
  checkServiceWorkerUpdate(){
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '552px';
        dialogConfig.height = '190px';
        dialogConfig.autoFocus = false;
        this.dialog.closeAll();
        const dialogSwUpdate = this.dialog.open(SwUpdateComponent, dialogConfig);
        dialogSwUpdate.beforeClosed().subscribe(() => {
          window.location.reload();
        });
      });
    }
  } 
}
