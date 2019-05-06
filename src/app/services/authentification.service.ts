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


/*login(username: string, password: string) {
  
  return this.http.post<any>('http://localhost:8091/users/' + 'signin',username )
      .pipe(map(user => {
          // Le login réussi si il y a un token jwt dans la réponse.
          if (user && user.token) {
              // Stock les détails utilisateurs et le token jwt dans le Local storage
              // afin de garder l'utilisateur connecté pendant les changements et rafraichissemnts
              //  de pages.
              localStorage.setItem('currentUser', JSON.stringify(user));
            //  this.currentUserSubject.next(user);
          }

          return user;
      }));
    
}
*/

login (user){
  return this.http.post('http://localhost:8091/users/signin',user);
}
}
