import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boite } from '../entity/boite';

@Injectable({
  providedIn: 'root'
})
export class BoiteService {

  boite : Boite ;
  link='http://localhost:8080/addtypeBoite';
  constructor(private http :HttpClient) { }

  public getTypeBoite(){
    return this.http.get('http://localhost:8080' + '/typeBoites') ;
  }

  public addBoite(boite){
    return this.http.post('http://localhost:8080/addtypeBoite',boite);
  }

  public supprimer(id_typeBoite : number){
    return this.http.delete('http://localhost:8080' + '/deleteTypeBoite/' + `/${id_typeBoite}`) ;
  }

  public edit(boite){
    return this.http.put('http://localhost:8080' + '/editTypeBoite' , boite);
  }

  public getTypeBoiteById(id_typeBoite){
    return this.http.get('http://localhost:8080' + '/typeBoiteById' + `/${id_typeBoite}`);
  }

}
