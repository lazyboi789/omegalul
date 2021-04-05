import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userName:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  storeUserName(){
console.log(this.userName);

    // if(this.userName !== ""){
    //   sessionStorage.setItem('username', this.userName);
    // }
    // else{
    //   alert("Username cannot be empty");
    // }
    
  }

}
