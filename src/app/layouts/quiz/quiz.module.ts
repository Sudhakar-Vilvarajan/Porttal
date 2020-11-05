import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './components/teams/teams.component';
import { TimerPipe } from './pipes/timer.pipe';
import { CoursesComponent } from './components/courses/courses.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { AttendeeDetailsModalComponent } from './components/modals/attendee-details-modal/attendee-details-modal.component';
import { QuestionModalComponent } from './components/modals/question-modal/question-modal.component';
import { ResultModalComponent } from './components/modals/result-modal/result-modal.component';

@NgModule({
  declarations: [
    TeamsComponent, 
    TimerPipe, 
    CoursesComponent, 
    QuestionsComponent, 
    AttendeeDetailsModalComponent, 
    QuestionModalComponent, 
    ResultModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class QuizModule { }
