import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";

import { routing } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { AddUserComponent } from "./user/add-user/add-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";

import { ApiService } from "./service/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ViewUserComponent } from "./user/view-user/view-user.component";
import { DeferLoadModule } from "@trademe/ng-defer-load";
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent,
    HeaderComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    DeferLoadModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
