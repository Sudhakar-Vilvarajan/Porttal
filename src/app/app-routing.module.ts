import { CoursesComponent } from './layouts/quiz/components/courses/courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { HomeComponent } from './modules/home/home.component';
import { MyprofileComponent } from './modules/myprofile/myprofile.component';
import { TeamComponent } from './applications/appknowledge/team/team.component';
import { ShiftplanComponent } from './applications/shiftplan/shiftplan.component';
import { OnboardingprocessComponent } from './applications/onboardingprocess/onboardingprocess.component';
import { EomComponent } from './applications/appknowledge/orderapp/eom/eom.component';
import { CciComponent } from './applications/appknowledge/orderapp/cci/cci.component';
import { CenterscreenComponent } from './applications/appknowledge/orderapp/centerscreen/centerscreen.component';
import { SpotpriceComponent } from './applications/appknowledge/orderapp/spotprice/spotprice.component';
import { PaceComponent } from './applications/appknowledge/bosapp/pace/pace.component';
import { DddComponent } from './applications/appknowledge/Vehicleapp/ddd/ddd.component';
import { SimonnowComponent } from './applications/appknowledge/bosapp/simonnow/simonnow.component';
import { HawkComponent } from './applications/appknowledge/bosapp/hawk/hawk.component';
import { WorkdayComponent } from './applications/appknowledge/bosapp/workday/workday.component';
import { FreightmanagerComponent } from './applications/appknowledge/operationsapp/freightmanager/freightmanager.component';
import { AxbComponent } from './applications/appknowledge/bosapp/axb/axb.component';
import { RailmanagerComponent } from './applications/appknowledge/operationsapp/railmanager/railmanager.component';
import { SafetycveComponent } from './applications/appknowledge/Vehicleapp/safetycve/safetycve.component';
import { AwardComponent } from './applications/appknowledge/Vehicleapp/award/award.component';
import { componentFactoryName } from '@angular/compiler';
import { SafettrainingComponent } from './applications/safettraining/safettraining.component';
import { SafetytrainingComponent } from './applications/safetytraining/safetytraining.component';
import { TeamsComponent } from './layouts/quiz/components/teams/teams.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [    
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'myprofile',
        component: MyprofileComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'shiftplan',
        component: ShiftplanComponent
      },
      {
        path: 'Onboarding',
        component: OnboardingprocessComponent
      },
      {
        path: 'eom',
        component: EomComponent
      },
      {
        path: 'cci',
        component: CciComponent
      },
      { 
        path: 'centerscreen',
        component: CenterscreenComponent
      },
      {
        path:'spotprice',
        component:SpotpriceComponent
      },
      {
        path:'pace',
        component:PaceComponent
      },
      {
        path:'ddd',
        component:DddComponent
      },
      {
        path:'simonnow',
        component:SimonnowComponent
      },
      {
        path:'pace',
        component:PaceComponent
      },
      {
        path:'hawk',
        component:HawkComponent
      },
      {
        path:'workday',
        component:WorkdayComponent
      },
      {
        path:'freightmanager',
        component:FreightmanagerComponent
      },
      {
        path:'axb',
        component:AxbComponent
      },
      {
        path:'railmanager',
        component:RailmanagerComponent
      },
      {
        path:'safetycve',
        component:SafetycveComponent
      },
      {
        path:'award',
        component:AwardComponent
      },
      {
        path:'safetytraining',
        component:SafetytrainingComponent
      }
      
    ]
  },
  {
    path : 'quiz',
    component : TeamsComponent
  },
  {
    path : 'team/:id',
    component : CoursesComponent
  },
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
