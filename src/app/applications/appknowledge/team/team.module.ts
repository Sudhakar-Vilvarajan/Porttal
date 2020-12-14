import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { EomComponent } from '../orderapp/eom/eom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import {CardModule} from 'primeng/card';
import { CciComponent } from '../orderapp/cci/cci.component';
import { CenterscreenComponent } from '../orderapp/centerscreen/centerscreen.component';
import { SpotpriceComponent } from '../orderapp/spotprice/spotprice.component';
import { DddComponent } from '../Vehicleapp/ddd/ddd.component';
import { PaceComponent } from '../bosapp/pace/pace.component';
import { RbiComponent } from '../bosapp/rbi/rbi.component';
import { SimonnowComponent } from '../bosapp/simonnow/simonnow.component';
import { HawkComponent } from '../bosapp/hawk/hawk.component';
import { WorkdayComponent } from '../bosapp/workday/workday.component';
import { FreightmanagerComponent } from '../operationsapp/freightmanager/freightmanager.component';
import { AxbComponent } from '../bosapp/axb/axb.component';
import { RailmanagerComponent } from '../operationsapp/railmanager/railmanager.component';
import { SafetycveComponent } from '../Vehicleapp/safetycve/safetycve.component';
import { AwardComponent } from '../Vehicleapp/award/award.component';
import { SafetytrainingComponent } from '../Vehicleapp/safetytraining/safetytraining.component';

@NgModule({
  declarations: [
    TeamComponent,
    EomComponent,
    CciComponent,CenterscreenComponent,SpotpriceComponent,DddComponent,PaceComponent,RbiComponent,SimonnowComponent,
    HawkComponent,WorkdayComponent,FreightmanagerComponent,AxbComponent,RailmanagerComponent,SafetycveComponent,AwardComponent
    ,SafetytrainingComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    RouterModule,
    BrowserAnimationsModule,
    MatVideoModule,
    CardModule
  ]
})
export class TeamModule { }
