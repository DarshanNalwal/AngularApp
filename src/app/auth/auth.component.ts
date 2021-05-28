import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email:string | undefined;
  password:string |undefined;
  rememberFlag:boolean | undefined;
  errorFlag:boolean = false;
  constructor(private router:Router){
    this.email="";
    this.password="";
    this.rememberFlag=false;
  }

  ngOnInit(): void {
  }

  LoginDetails(){
    if(this.email == "abcd" && this.password == "pwd"){
      this.errorFlag=false;
      alert("You have successfully logged in!");
      this.router.navigate(["/dashboard"]);
    } else{
      this.errorFlag=true;
    }
  }

  title='Authorization';
}
