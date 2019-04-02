import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratAssurance } from '../entity/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contratAss : ContratAssurance[] ;
  link='http://localhost:8080/addContrat' ;
  constructor(private http : HttpClient) { }

  public getContratAss(){
    return this.http.get('http://localhost:8080' + '/contratAssurance');
  }

  public addContrat(contratAss){
    return this.http.post(this.link,contratAss) ;
  }

  
}
