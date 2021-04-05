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

  storeUserName(){

    if(this.userName !== ""){
      sessionStorage.setItem('username', this.userName);
      this._router.navigateByUrl("chat");
    }
    else{
      alert("Username cannot be empty");
    }
    
  }

  clearUserName(){
    sessionStorage.removeItem('username');
  }

}
