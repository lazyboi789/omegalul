import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  constructor() { }

  connect(url: string) {
    let socket = webSocket(url);
    return socket.asObservable();
  }

}
