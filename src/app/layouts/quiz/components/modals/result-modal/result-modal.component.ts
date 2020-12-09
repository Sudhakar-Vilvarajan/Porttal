import { Question, Attendee, Course } from './../../../Interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.scss']
})
export class ResultModalComponent implements OnInit {

  @Input('course') course : Course;
  @Input('attendee') attendee  : Attendee;
  @Input('questions') questions : Question[];
  @Input('usersAnswer') answers : object;

  today = Date.now();
  obtainPercent : number;
  pass : boolean;
  constructor() { }

  ngOnInit(): void {
  }

  

  evaluateAswers(){
    this.obtainPercent=-1;
    this.pass=null;
    let quizMark : number = this.questions.length;
    let userObtainMark : number = 0;
    let answerObjestKeys = Object.keys(this.answers);
    answerObjestKeys.forEach(key => {
      this.questions.forEach((question : Question)=>{
        if(question.id === +key){
          if(question.type==='MCQ'){
            question.options.forEach(option=>{
              if(option.correct && option.text==this.answers[key]){
                userObtainMark++;
              }
            })
          }
          else{
            let flag : number = 0;
            for(let i=0; i<question.options.length; i++){
              this.answers[key][question.options[i].text] = (this.answers[key][question.options[i].text]==='') ? false : this.answers[key][question.options[i].text];
              if(this.answers[key][question.options[i].text] === question.options[i].correct){
                flag+=1;
              }
              else{
                flag-=100;
              }
            }
            if(flag>=0){
              userObtainMark++;
            }
          }
        }
      });
    });
    let resultTimer = setInterval(()=>{
      this.obtainPercent= userObtainMark/quizMark*100;
      this.pass=this.obtainPercent>=65;
      clearInterval(resultTimer);
    },5000);
  }

}
