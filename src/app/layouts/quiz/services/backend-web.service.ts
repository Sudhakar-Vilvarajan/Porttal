import { Context } from './../context';
import { BackendResponce, Team } from './../Interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendWebService {

  constructor(private http:HttpClient) { }

  getAllTeams(){
    return this.http.get<BackendResponce>(Context.webServiceRootPath + 'team');
  }

  addNewTeam(team : Team){
    return this.http.post<BackendResponce>(Context.webServiceRootPath + 'team',team);
  }

  getTeamByID(teamID : number){
    return this.http.get<BackendResponce>(Context.webServiceRootPath + 'team/' + teamID);      
  }

  getCoursesForTeamID(teamID : number){
    return this.http.get<BackendResponce>(Context.webServiceRootPath + 'course?teamID=' + teamID);      
  }

  getQuestionsForCourseID(courseID : number){
    return this.http.get<BackendResponce>(Context.webServiceRootPath + 'question?courseID=' + courseID);
  }
}
