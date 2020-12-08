import { NgForm } from '@angular/forms';
import { Attendee } from './../../../Interfaces';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-attendee-details-modal',
  templateUrl: './attendee-details-modal.component.html',
  styleUrls: ['./attendee-details-modal.component.scss']
})
export class AttendeeDetailsModalComponent implements OnInit {

  constructor() { }

  @Input('courseID') courseID : number;
  @Output('submit') submit = new EventEmitter<Attendee>();
  

  ngOnInit(): void {
    
  }

  onAttendeeDetailsSubmit(form: NgForm) : void{
    this.submit.emit(form.value);
  }

}
