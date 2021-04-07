import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { WebsocketService } from './websocket.service';

const CHAT_URL = "ws://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private isConnected = new BehaviorSubject(false);
  $isConnected = this.isConnected.asObservable();

  constructor(private wsService: WebsocketService) {
    // this.wsService.connect(CHAT_URL);
  }

    public connect(){
      return new Observable<any>((observer)=>{
        this.wsService.connect(CHAT_URL).subscribe((connectionId)=>{
          observer.next(connectionId);
        });
      })
      
    }

    public getUsers(){
      this.wsService.emitEvent('getUsers', {});
      this.wsService.listenForEvent('getUsers').subscribe((users)=>{
        console.log(users);
      })
    }

}
