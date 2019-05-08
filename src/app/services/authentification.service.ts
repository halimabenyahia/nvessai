import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginInfo } from '../entity/loginInfo';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http : HttpClient) { }


login (user){
  return this.http.post('http://localhost:8091/users/signin',user);
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
}
}
