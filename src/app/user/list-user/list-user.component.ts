import { Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private router: Router, private apiService: ApiService,private route: ActivatedRoute) { }
  
  users: any
  isDelete:boolean = false;

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['']);
      return;
    }
    this.getUsers();
  }

  getUsers(){    
  	this.apiService.getUsers().subscribe((data:any) => {
        this.users = data.data;
    });
  }  
  
  deleteUser(user:any): void {
    this.apiService.deleteUser(user.id)
      .subscribe( data => {
        this.isDelete = true;
        this.users = this.users.filter(u => u !== user);
      })
  };  
}