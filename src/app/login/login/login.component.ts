import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';


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
      // alert("Username cannot be empty");
      console.log('button pressing?')
      this._appService.showSnackBar("Username cannot be empty", 1, 5000);
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
