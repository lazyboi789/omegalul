import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Snackbar } from '../shared/snackbar/snackbar.enum';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly _snackBar = new BehaviorSubject({showing: false, message: '', type: 0});
  readonly snackBar = this._snackBar.asObservable();

  constructor() { }

  showSnackBar(message:string, type:number, duration:number){

    // showing snackbar
    this._snackBar.next({showing: true, message, type});

    // hiding snackbar after x amount of time
    setTimeout(() => {
      this._snackBar.next({showing: false, message, type});
    }, duration);

  }
}
