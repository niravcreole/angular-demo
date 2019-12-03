import { Component, OnInit , Inject} from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: [];
  editUser: FormGroup;
  invalidUpdateUser: boolean = false;
  messageStatus:boolean = false;
  routeSub:any;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    let userId:any;
    //get user if from url param
    this.routeSub = this.route.params.subscribe(params => {
      userId = params['id']
    });
    if(!userId) {
      this.router.navigate(['users']);
      return;
    }
    //edit user 
    this.editUser = this.formBuilder.group({
    	id: ["", Validators.required],
	    email: ["", Validators.compose([Validators.required])],
	    first_name: ["", Validators.required],
	    last_name: ["", Validators.required],
	    avatar: ["", Validators.required]
  	});
    this.apiService.getUserById(userId)
      .subscribe( (data:any) => {
        this.editUser.setValue(data.data);
      });
  }
  handleClose(){
    this.messageStatus = false;
  }
  //form submission handling
  onSubmit() {
  	let updateData = this.editUser.value;
    this.apiService.updateUser(updateData)
      .pipe(first())
      .subscribe(
        (data: any) => {
          if(data.updatedAt) {
          	this.messageStatus = true;
          	setTimeout(() => {
            	this.router.navigate(['users']);
        	}, 3000);
          }else {
            this.invalidUpdateUser = true;
          }
        },
        error => {
          this.invalidUpdateUser = true;
        });
  }

}