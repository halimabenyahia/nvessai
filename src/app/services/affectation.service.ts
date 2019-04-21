import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Affectation } from '../entity/affectation';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  affectation : Affectation ;
  link ='http://localhost:8080/addAffectation' ;
  constructor(private http : HttpClient) { }

  public getAffectation(){
    return this.http.get('http://localhost:8090' + '/affectations') ;
  }

  public addAffectation(affectation){
    return this.http.post('http://localhost:8090/addAffectation', affectation) ;
  }

  public supprimer(id_affectation : number){
    return this.http.delete('http://localhost:8090' + '/deleteAffectation' + `/${id_affectation}`)
  }

  public edit(affectation){
    return this.http.put('http://localhost:8090'+ '/editAffectation' , affectation);
  }

  public getAffectationById(id_affectation){
    return this.http.get('http://localhost:8090' + '/affectationById' +`/${id_affectation}` );
  }

  public getAffectationParam(parametre){
    return this.http.get('http://localhost:8090' + '/affectationByParam' + `/${parametre}`);
  }
}
