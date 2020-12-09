import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CciComponent } from './applications/appknowledge/orderapp/cci/cci.component';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
<<<<<<< HEAD
import { CenterscreenComponent } from './applications/appknowledge/orderapp/centerscreen/centerscreen.component';
import { SpotpriceComponent } from './applications/appknowledge/orderapp/spotprice/spotprice.component';
import { FreightmanagerComponent } from './applications/appknowledge/operationsapp/freightmanager/freightmanager.component';
import { PaceComponent } from './applications/appknowledge/bosapp/pace/pace.component';

import { SimonnowComponent } from './applications/appknowledge/bosapp/simonnow/simonnow.component';
import { DddComponent } from './applications/appknowledge/Vehicleapp/ddd/ddd.component';
import { HawkComponent } from './applications/appknowledge/bosapp/hawk/hawk.component';
import { WorkdayComponent } from './applications/appknowledge/bosapp/workday/workday.component';
import { AxbComponent } from './applications/appknowledge/bosapp/axb/axb.component';
import { RailmanagerComponent } from './applications/appknowledge/operationsapp/railmanager/railmanager.component';
import { SafetycveComponent } from './applications/appknowledge/Vehicleapp/safetycve/safetycve.component';
import { AwardComponent } from './applications/appknowledge/Vehicleapp/award/award.component';
import { SafettrainingComponent } from './applications/safettraining/safettraining.component';
import { SafetytrainingComponent } from './applications/safetytraining/safetytraining.component';
=======
import { QuizModule } from './layouts/quiz/quiz.module'
>>>>>>> 18db4c001db9edbf7723249729afd17ebc7441e3

@NgModule({
  declarations: [
    AppComponent,
  
    
    
    
    
    
    
    
   
    
    
   
  ],
  imports: [
    BrowserModule,
    DiagramModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
