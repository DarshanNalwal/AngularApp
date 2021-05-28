import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  email : string | undefined;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.email="";
  }

  login(){
    if(this.email=="abcd"){
      this.router.navigateByUrl("/auth");
    }
  }
}
