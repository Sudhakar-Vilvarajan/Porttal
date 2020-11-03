import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './../../services/error.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendWebService } from './../../services/backend-web.service';
import { Team } from './../../Interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  updateUrl(url:string):string{
    return "url('"+url+"')";
  }

  //isAdmin : boolean = true;

  allTeam: Team[] = null;
  constructor(private bachendWS : BackendWebService, 
              private router : Router,
              private activedRoute : ActivatedRoute,
              public quizPortalError : ErrorService) { }

  

  ngOnInit(): void {
    // localStorage.setItem('isAdmin', this.route.snapshot.routeConfig.path=='admin' ? 'true' : 'false');
    this.quizPortalError.setMessage("");
    //this.isAdmin = Boolean(this.activedRoute.snapshot.routeConfig.path);
    this.allTeamDetails();
  }

  allTeamDetails(){
    this.bachendWS.getAllTeams()
    .subscribe((data)=>{
      if(data.isSuccess){
        this.allTeam = data.result;
      }
      else {
        this.quizPortalError.setMessage(data.error.detailMessage);
      }
    }, (error:HttpErrorResponse) => {
      this.quizPortalError.setMessage(error.message);
    })

  }


  onTeamChoose(team : Team){
    this.router.navigate(['team',team.id]);
  }

}
