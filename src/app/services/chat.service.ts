import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import { WebsocketService } from './websocket.service';

const CHAT_URL = "ws://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _isConnected = new BehaviorSubject(false);
  isConnected = this._isConnected.asObservable();

  

  constructor(private wsService: WebsocketService) { 
    this.wsService.connect(CHAT_URL).subscribe(()=>{
      this._isConnected.next(true);
    });
  }

  sendMessage(message:string){
    this.wsService.sendMessage(message);
  }

}
