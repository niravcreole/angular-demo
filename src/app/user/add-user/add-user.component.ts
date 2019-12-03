import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  // Global declaration
  addUser: FormGroup;
  invalidAddUser: boolean = false;
  messageStatus:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {}

  handleClose(){
    this.messageStatus = false;
  }
  // Insert user
  onSubmit() {
    if (this.addUser.invalid) {
      return;
    }
    const userPayload = {
      firstname: this.addUser.controls.firstname.value,
      lastname: this.addUser.controls.lastname.value,
      email: this.addUser.controls.username.value
    };
    this.apiService.createUser(userPayload).subscribe(
      (response: any) => {
        this.messageStatus = true;
        setTimeout(() => {
          this.router.navigate(["users"]);
        }, 3000);
      },
      error => {
        this.invalidAddUser = true;
      }
    );
  }

  ngOnInit() {
    if (!window.localStorage.token) {
      this.router.navigate([""]);
    } else {
      this.addUser = this.formBuilder.group({
        username: ["", Validators.compose([Validators.required])],
        firstname: ["", Validators.required],
        lastname: ["", Validators.required]
      });
    }
  }
}
