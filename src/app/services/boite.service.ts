import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boite } from '../entity/boite';

@Injectable({
  providedIn: 'root'
})
export class BoiteService {

  boite : Boite [];
  link='http://localhost:8080/addtypeBoite';
  constructor(private http :HttpClient) { }

  public getTypeBoite(){
    return this.http.get('http://localhost:8080' + '/typeBoites') ;
  }

  public addBoite(boite){
    return this.http.post(this.link,boite);
  }

  public supprimer(id_typeBoite : number){
    return this.http.delete('http://localhost:8080' + '/deleteTypeBoite/' + `/${id_typeBoite}`) ;
  }
}
