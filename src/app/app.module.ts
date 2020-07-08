import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { CciComponent } from './applications/appknowledge/orderapp/cci/cci.component';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@NgModule({
  declarations: [
    AppComponent,
    CciComponent
  ],
  imports: [
    BrowserModule,
    DiagramModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
