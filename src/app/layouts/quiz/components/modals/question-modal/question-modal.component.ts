import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './../../../services/error.service';
import { BackendWebService } from './../../../services/backend-web.service';
import { NgForm } from '@angular/forms';
import { Course, Attendee, Question } from './../../../Interfaces';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent implements OnInit {

  @Input('course') course : Course
  @Input('attendee') attendee : Attendee
  @Output('answerSubmit') answerSubmit = new EventEmitter<any>();
  @Output('questionSelection') questionSelection = new EventEmitter<Question[]>();
  @ViewChild('submitButton',{static : false}) submitButton : ElementRef
  @ViewChild('questionForm',{static : false}) questionForm : NgForm

  timeLeft : number;
  allQuestions : Question[];
  selectiveQuestions : Question[]=[];
  timer:any;
  
  
  
  constructor(private backendWS : BackendWebService, public quizPortalError : ErrorService) { }

  ngOnInit(): void {
  }

  stopTimer(){
    clearInterval(this.timer);
  }



  startTimer() {
    this.timer=setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      else {
        this.submitButton.nativeElement.click();
      }
    },1000)
  }



  loadQuestions(){
    this.backendWS.getQuestionsForCourseID(this.course.id)
    .subscribe(
      data => {
        if(data.isSuccess){
          this.allQuestions = data.result;
          this.suffleQustions();
          this.timeLeft = this.course.durationInMins*60;
          this.startTimer();
        }
        else
          this.quizPortalError.setMessage(data.error.detailMessage);
      },
      (error : HttpErrorResponse) => {
        this.quizPortalError.setMessage(error.message);
      }
    )
  }

  onQuestionModalClose(){
    this.quizPortalError.setMessage("");
  }

  onSubmitButtonClick(){
    this.stopTimer();
    this.questionSelection.emit(this.selectiveQuestions);
    
    this.answerSubmit.emit(this.questionForm.value);
  }

  suffleQustions(){
    this.selectiveQuestions=[];
    let number: number = (this.course.numberOfQuestions>= this.allQuestions.length) ? this.allQuestions.length : this.course.numberOfQuestions; 
    for(let i=0;i<number;i++){
      let index=Math.floor(Math.random()*this.allQuestions.length);
      this.selectiveQuestions.push(this.allQuestions.splice(index,1).pop());
    }
  }

}
