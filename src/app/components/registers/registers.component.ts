import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ExternalMedicalRestService } from 'sif-api-client';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// 3-party
import { AppService } from 'src/app/services/app.service';

interface hourRules{
  actityName: string,
  activityMessage: string
}

interface activityTypes{
  type: string, 
  name: string
}

interface dialogSize{
  width: string,
  height: string
}
@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent implements OnInit, OnDestroy {
  date = Date();
  loading = false;
  dataRegister: any;
  dataRegisterSize:number;
  dataRegisterActivities:any;
  dataUser: any;
  disableCheck = false;
  currentActivityRegistryDisable:boolean;
  currentRegisteredActivities:number;
  maxActivityNumberFullTime:number = 4;
  maxActivityNumberHalfTime:number = 2;
  maxActivityNumberToRegister:number;
  medicWorkFulltime:boolean;
  activityTypes: activityTypes[];
  hourInterval: NodeJS.Timeout;
  hourNow: Date;
  dialogSize: dialogSize;
  hourRules: hourRules[];
  dialogPosition = {
    top: `10vh`,
    right: `14vw`
  };
  dialogSizeFulltime = {
    width: '368px', 
    height: '577px'
  };
  dialogSizeHalftime = {
    width: '368px',
    height: '456px'
  }
  hourRulesFullTime = [
    { actityName: 'Hora de entrada:', activityMessage: 'La hora de entrada se guardó correctamente'},
    { actityName: 'Inicio de hora de comida:', activityMessage: 'La hora de salida a comer se guardó correctamente'},
    { actityName: 'Regreso de hora de comida: ', activityMessage: 'La hora de regreso de comer se guardó correctamente'},
    { actityName: 'Hora de salida:', activityMessage: 'La hora de salida se guardó correctamente'},
  ];
  hourRulesHalftime = [
    { actityName: 'Hora de entrada:', activityMessage: 'La hora de entrada se guardó correctamente' },
    { actityName: 'Hora de salida:', activityMessage: 'La hora de salida se guardó correctamente' },
  ];
  activityTypesFulltime = [
    { type: 'E', name: 'entrada' },
    { type: 'C', name: 'salida a comer' },
    { type: 'R', name: 'regreso de comer' },
    { type: 'S', name: 'salida' }
  ];
  activityTypesHalftime = [
    { type: 'E', name: 'entrada' },
    { type: 'S', name: 'salida' }
  ];
  constructor( private extDoc: ExternalMedicalRestService, 
               private alert: AlertService,
               public dialogRef: MatDialogRef<RegistersComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private appService: AppService ) { }

  ngOnDestroy(): void {
    clearInterval(this.hourInterval);
  }

  ngOnInit(){
    this.currentActivityRegistryDisable = false;
    this.showCurrentHour();
  }

  /**
    * determine if medic activities are fulltime or hafltime
    * @author Walmart Mexico SIF Pharmacy project
  */
  validate(form: NgForm) {
    this.loading = true;
    const { value: data } = form
    this.extDoc.validateUsingPOST(data)
          .pipe( finalize(() => this.loading = false))
          .subscribe( res => {
            const { valid, inactive } = res;
            if (inactive){
              this.alert.error('Usuario inactivo. Verifica con tu administrador.'); 
              return;
            } 
            if (!valid){
              this.alert.error('Usuario o contraseña invalido. Por favor intente de nuevo'); return;
            }
            this.currentRegisteredActivities = res.activities.length;
            this.medicWorkFulltime = res.lunchTime;
            if(this.medicWorkFulltime){
              this.maxActivityNumberToRegister = this.maxActivityNumberFullTime;
              this.activityTypes = this.activityTypesFulltime;
              this.hourRules = this.hourRulesFullTime;
              this.dialogSize = this.dialogSizeFulltime;
            }else{
              this.maxActivityNumberToRegister = this.maxActivityNumberHalfTime; 
              this.activityTypes = this.activityTypesHalftime;
              this.hourRules = this.hourRulesHalftime;
              this.dialogSize = this.dialogSizeHalftime;
            }
            this.dataRegister = res
            this.dataRegisterSize = res.activities.length;
            this.dataRegisterActivities = res.activities;
            this.dataUser = data
            this.updatePosition(this.dialogPosition);
            this.updateSize(this.dialogSize);
          })
  }

  /**
    * register medic activities for fulltime and hafltime
    * @author Walmart Mexico SIF Pharmacy project
  */
  registerAcvitity() {
    if (this.currentRegisteredActivities != this.maxActivityNumberToRegister){     
      const activityTypeToRegister = this.activityTypes[this.currentRegisteredActivities].type;
      const hourRulesMessage = this.hourRules[this.currentRegisteredActivities].activityMessage;
      const ipDefault = '0.0.0.0';
      let checkData = {
        activityType: activityTypeToRegister,
        pUser: this.dataUser.pUser,
        userName: this.dataUser.userName,
        ipAddress: this.appService.ip || ipDefault
      };
      this.extDoc.registerUsingPOST1(checkData).subscribe(data => {
        this.currentActivityRegistryDisable = true;
        this.alert.success(hourRulesMessage);
        this.closeDialog();
      });
    }; 
  }

  /**
    * update the dialog size
    * @author Walmart Mexico SIF Pharmacy project
  */
  updateSize(size) {
    this.dialogRef.updateSize(size.width, size.height);
  }

  /**
    * update the dialog size
    * @author Walmart Mexico SIF Pharmacy project
  */
  updatePosition(position) {
    this.dialogRef.updatePosition({
      top: position.top,
      right: position.right
    });
  }


  /**
    * trigger close dialog action
    * @author Walmart Mexico SIF Pharmacy project
  */
  closeDialog(){
    this.dialogRef.close();
  }

  showCurrentHour(){
    this.hourInterval = setInterval(() => {
      this.hourNow = new Date();
    }, 1000);
  }

}
