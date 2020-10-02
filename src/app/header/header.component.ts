import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  session:String;
  name:string;
  constructor() { 
    this.session = sessionStorage.getItem("role");
    this.name = sessionStorage.getItem("name");
  }

  ngOnInit(): void {
  }

}
