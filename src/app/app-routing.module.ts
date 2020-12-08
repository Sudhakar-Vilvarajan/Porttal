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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
