import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { EomComponent } from '../orderapp/eom/eom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    TeamComponent,
    EomComponent
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
