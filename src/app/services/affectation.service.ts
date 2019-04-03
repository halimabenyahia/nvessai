import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Affectation } from '../entity/affectation';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  affectation : Affectation [] ;
  link ='http://localhost:8080/addAffectation' ;
  constructor(private http : HttpClient) { }

  public getAffectation(){
    return this.http.get('http://localhost:8080' + '/affectations') ;
  }

  public addAffectation(affectation){
    return this.http.post(this.link, affectation) ;
  }

  public supprimer(id_affectation : number){
    return this.http.delete('http://localhost:8080' + '/deleteAffectation/' + `/${id_affectation}`)
  }

  public editAffectation(affectation){
    return this.http.post('http://localhost:8080'+ '/editAffectation' , affectation);
  }
}
