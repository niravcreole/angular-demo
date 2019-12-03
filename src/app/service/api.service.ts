import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://reqres.in/api/';

  login(loginPayload: {email: string,password: string}) {
    return this.http.post(this.baseUrl+'login',loginPayload);
  }

  getUsers() {
    return this.http.get(this.baseUrl+'users?per_page=12');
  }

  getUserById(id: string) {
    return this.http.get(this.baseUrl + 'users/'+id);
  }

  createUser(userPayload){
    return this.http.post(this.baseUrl+'users',userPayload);
  }

  updateUser(user: any) {
    return this.http.put(this.baseUrl + 'users/'+user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
}