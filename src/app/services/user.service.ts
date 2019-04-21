import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User ;
  constructor(private http : HttpClient) { }


  public getAllUser(){
    return this.http.get('http://localhost:8090' + '/users');
  }

  public getUserById(id_user){
    return this.http.get('http://localhost:8090' + '/userById' + `/${id_user}`);
  }

  public addUser(user){
    return this.http.post('http://localhost:8090' + '/addUser' , user);
  }

  public supprimer(id_user){
    return this.http.delete('http://localhost:8090' + '/deleteUser' + `/${id_user}` );
  }

  public edit(user){
    return this.http.put('http://localhost:8090' + '/editUser' , user);
  }

  public getetatUser(login : string,mdp : string){
    const header = login + ' ' + mdp;
    return this.http.get('http://localhost:8090' + '/etat/' + header );
  } 


}

