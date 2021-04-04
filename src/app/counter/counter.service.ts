import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;

  constructor() { }

  getNumber(): number{
    return this.counter;
  }

  incrementNumber(){
    this.counter++;
  }
}
