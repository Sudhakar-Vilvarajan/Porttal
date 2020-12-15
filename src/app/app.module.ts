import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { QuizModule } from './layouts/quiz/quiz.module'
import { ChatbotModule } from './layouts/chatbot/chatbot.module';

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
    QuizModule,
    ChatbotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
