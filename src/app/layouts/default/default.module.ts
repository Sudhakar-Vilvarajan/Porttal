import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatButtonModule, MatGridListModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from 'src/app/modules/home/home.component';
import {ButtonModule} from 'primeng/button';
import { MyprofileComponent } from 'src/app/modules/myprofile/myprofile.component';
import {CardModule} from 'primeng/card';
import { ShiftplanComponent } from 'src/app/applications/shiftplan/shiftplan.component';
import { OnboardingprocessComponent } from 'src/app/applications/onboardingprocess/onboardingprocess.component';
import { TeamModule} from 'src/app/applications/appknowledge/team/team.module'

@NgModule({
  declarations: [
    DefaultComponent,
    PostsComponent,
    HomeComponent,
    MyprofileComponent, 
    ShiftplanComponent,
    OnboardingprocessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    ButtonModule,
    CardModule,    
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    TeamModule
  ],
  providers: [
  ]
})
export class DefaultModule { 
}
