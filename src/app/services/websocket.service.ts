import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor() { }

  public webSocket!: WebSocketSubject<any>;

  connect(url: string) {
    this.webSocket = webSocket(url);

    return this.webSocket;
  }

  public sendMessage(message:string){
    this.webSocket.next(message);
  }

}
