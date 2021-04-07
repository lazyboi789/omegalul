import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {

  constructor(private _appService: AppService, private _chatService: ChatService) { }

  connectionId!: string

  ngOnInit(): void {
    //grab username from session
    this._chatService.connect().subscribe((connectionId) => {
      //set connection id
      this.connectionId = connectionId;

      console.log(this.connectionId);
    });

    this.getUsers();
  }

  public getUsers(){
      this._chatService.getUsers();
  }

  public sendMessage(){

  }

  public joinRoom(){

  }

  public createRoom(){

  }

  public leaveRoom(){

  }


}
