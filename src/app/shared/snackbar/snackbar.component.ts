import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less']
})
export class SnackbarComponent implements OnInit {

  snackBarMessage:string = "";
  snackBarClass:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
