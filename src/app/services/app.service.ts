import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showingSnackBar:boolean = false;

  constructor() { }

  showSnackBar(message:string, type:string){
    //show the snackbar
    this.showingSnackBar = true;

    let snackbar  = document.getElementById("snackbar");

    if(this.showingSnackBar){
     snackbar?.classList.add('show');
    }
    else{
     snackbar?.classList.remove('show');
    }

    setTimeout(()=>{
      this.showingSnackBar = false;
      snackbar?.classList.remove('show');
    }, 1000)

  }
}