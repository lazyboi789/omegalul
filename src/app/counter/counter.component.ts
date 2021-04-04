import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {

  count: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  buttonClicked(){
   this.counterService.incrementNumber();
   this.count = this.counterService.getNumber();
  }

}
