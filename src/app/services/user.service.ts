import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from '../entity/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User ;
  currentUser : Observable<User> ;

  link ='http://localhost:8091/users/';

  constructor(private http : HttpClient) { }


  public getAllUser(){
    return this.http.get('http://localhost:8091' + '/users');
  }

  public getUserById(id){
    return this.http.get('http://localhost:8091' + '/userById' + `/${id}`);
  }

  public addUser(user){
    return this.http.post('http://localhost:8091' + '/addUser' , user);
  }

  public supprimer(id){
    return this.http.delete('http://localhost:8091' + '/deleteUser' + `/${id}` );
  }

  public edit(user){
    return this.http.put('http://localhost:8091' + '/editUser' , user);
  }
/*
  public getetatUser(login : string,mdp : string){
    const header = login + ' ' + mdp;
    return this.http.get('http://localhost:8091' + '/etat/' + header );
  }
  */


  
  }


  




