import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session:String;
  name:string;
  constructor(private router:Router) { 
    this.session = sessionStorage.getItem("role");
    this.name = sessionStorage.getItem("name");
  }

  ngOnInit(): void {
  }

  public logout(){
    sessionStorage.removeItem("role");
    this.router.navigate(['home']).then(function(){
      window.location.reload();
    })
  }

}
