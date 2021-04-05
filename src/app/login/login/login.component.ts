import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName:string = "";

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.clearUserName();
  }

  login(){

    if(this.userName !== ""){
      sessionStorage.setItem('username', this.userName);
      this._router.navigateByUrl('chat');
    }
    else{
      alert("Username cannot be empty");
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
