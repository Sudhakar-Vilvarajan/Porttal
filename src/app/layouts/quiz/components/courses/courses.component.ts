import { Team, Course, Attendee } from './../../Interfaces';
import { ErrorService } from './../../services/error.service';
import { BackendWebService } from './../../services/backend-web.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  updateUrl(url:string):string{
    return "url('"+url+"')";
  }

  teamID : any = null;
  team : Team = null;
  allCourse : Course[] = null;
  attendee : Attendee = null;



  constructor(private activatedRoute : ActivatedRoute,
              private backendWS : BackendWebService,
              public quizPortalError : ErrorService) { }

  ngOnInit() : void {
    this.quizPortalError.setMessage("");
    this.teamID = this.activatedRoute.snapshot.params.id;
    this.loadAllData();
  }

  loadAllData() : void{
    this.backendWS.getTeamByID(this.teamID).subscribe(
      (data) => {
        if(data.isSuccess){
          this.team = data.result
          this.backendWS.getCoursesForTeamID(this.teamID).subscribe(
            data => {
              if(data.isSuccess){
                this.allCourse = data.result;
              }
              else
                this.quizPortalError.setMessage(data.error.detailMessage);
            },
            (error : HttpErrorResponse) => this.quizPortalError.setMessage(error.message)
          )
        }
        else
          this.quizPortalError.setMessage(data.error.detailMessage);
      },
      (error : HttpErrorResponse) => {
        this.quizPortalError.setMessage(error.message);
      }
    );
  }

}
