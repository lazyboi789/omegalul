import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Snackbar } from 'src/app/shared/snackbar/snackbar.enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName:string = "";

  constructor(private _router: Router, private _appService: AppService) { }

  ngOnInit(): void {
    this.clearUserName();
  }

  login(){

    if(this.userName !== ""){
      sessionStorage.setItem('username', this.userName);
      this._router.navigateByUrl('chat');
    }
    else{
      this._appService.showSnackBar("Username cannot be empty", Snackbar.Danger, 5000);
    }
    
  }

  handleEnterKeyPressLogin(event: KeyboardEvent){
    if(event.key === "Enter"){
      this.login();
    }
  }

  clearUserName(){
    sessionStorage.removeItem('username');
  }

}
