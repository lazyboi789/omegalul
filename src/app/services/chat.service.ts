import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { WebsocketService } from './websocket.service';

const CHAT_URL = "ws://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _isConnected = new BehaviorSubject(false);
  isConnected = this._isConnected.asObservable();

  constructor(wsService: WebsocketService) { 
      wsService.connect(CHAT_URL).subscribe((msg)=>{
        this._isConnected.next(true);
      },
      err =>{
        console.log(err);
        this._isConnected.next(false);
      })
  }

}
