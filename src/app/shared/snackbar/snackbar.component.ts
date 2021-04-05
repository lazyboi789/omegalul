import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.less']
})
export class SnackbarComponent implements OnInit {

  snackBarMessage:string = "";
  snackBarType:number = 0;
  showSnackBar:boolean = false;

  constructor(
    private appService: AppService
  ) { }

  private _onDestroy = new Subject<void>(); // used to unsubscribe from observables in ngOnDestroy

  ngOnInit(): void {
    this.appService.snackBar.pipe(takeUntil(this._onDestroy)).subscribe(res => {
      this.showSnackBar = res.showing;
      this.snackBarMessage = res.message;
      this.snackBarType = res.type;
    })

  }

}
