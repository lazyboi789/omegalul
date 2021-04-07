import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as SocketIO from "socket.io-client";



@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket!: SocketIO.Socket;
  constructor() {

  }

  public connect(url:string){
    
    return new Observable((observer)=>{
      //connect to websocket server
      this.socket = SocketIO.io(url);

      //listen for event from server to get connectionId
      this.listenForEvent('getSocketId').subscribe((id)=>{
        observer.next(id);
      });
    });
    
  }

  public emitEvent(eventName:string, eventdata:any){
    this.socket.emit(eventName, eventdata);
  }

  public listenForEvent(eventName:string){

    return new Observable<string>((observer)=>{
      this.socket.on(eventName, (arg)=>{
        observer.next(arg);
      })
    })
  
  }

}
