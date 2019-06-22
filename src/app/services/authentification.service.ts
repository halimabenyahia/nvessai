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

isLogged() {
  return !! localStorage.getItem('token');
}

login (user){
  console.log(user);
  return this.http.post('http://localhost:8091/users/signin',user);
}

logout(){
  console.log("logout");
  
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('role');
}


/*getToken(): string {
  return localStorage.getItem('token');
}

getTokenExpirationDate(token: string): Date {
  token = this.getToken()
 // const decoded = jwt_decode(token);

  //if (decoded.exp === undefined) return null;

  const date = new Date(0);
  date.setUTCSeconds(decoded.exp);
  return date;
}

isTokenExpired(token?: string): boolean {
  if (!token) token = this.getToken();
  if (!token) return true;

  const date = this.(token);
  if (date === undefined) return false;
  return !(date.valueOf() > new Date().valueOf());
}

*/

}
