import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {    
  	if(!window.localStorage.getItem('token')) {      
      this.router.navigate(['']);
      return;
    }
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['']);
  }

  Users(): void {
    this.router.navigate(['users']);
  };

}
