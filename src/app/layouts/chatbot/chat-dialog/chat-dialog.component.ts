import { ChatService, Message } from './../chat.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {
  @ViewChild('chatArea',{static : false}) chatArea : ElementRef
  messages: Observable<Message[]>;
  formValue: string;
  timer: any;
  constructor(public chat: ChatService) { }
  ngOnInit() {
    // appends to array after each new message is added to feedSource
    // this.messages = this.chat.conversation.asObservable()
    //     .scan((acc, val) => acc.concat(val) );

    this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      )
  }
  sendMessage() {
    if(this.formValue.trim().length>0){
      this.chat.converse(this.formValue);
      this.formValue = '';
    }
    this.startTimer();
  }

  startTimer() {
    this.timer=setInterval(() => {
      this.chatArea.nativeElement.scrollTop = this.chatArea.nativeElement.scrollHeight;
    },2000);
  }

}
