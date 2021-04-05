import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Snackbar } from './snackbar.enum';

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

  getSnackBarType(): string { 
    let snackBarClass = '';
    let showSnackBar = `${this.showSnackBar ? 'show' : ''}`;
    switch (this.snackBarType) {
      case Snackbar.Info: snackBarClass = `${showSnackBar} info`; break;
      case Snackbar.Success: snackBarClass = `${showSnackBar} success`; break;
      case Snackbar.Warning: snackBarClass = `${showSnackBar} warning`; break;
      case Snackbar.Danger: snackBarClass = `${showSnackBar} danger`; break;
      default: snackBarClass = '';
    }

    return snackBarClass;
  }

}
