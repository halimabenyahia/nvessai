import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modele } from '../entity/modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  modele : Modele ;

  constructor(private http : HttpClient) { }

  public getModeles(){
    return this.http.get('http://localhost:8090' + '/modeles') ;
  }

  public addModele(modele) : Observable<any>{
    return this.http.post('http://localhost:8090/addModele',modele);
  }

  public supprimerModele(id_modele){
    return this.http.delete('http://localhost:8090/deleteModele' + `/${id_modele}`);
  }

  public editModele(modele : Modele){
    return this.http.put('http://localhost:8090' + '/editModele' , modele) ;
  }

  public getModeleById(id_modele){
    return this.http.get('http://localhost:8090' + '/modeleById' +`/${id_modele}` );
  }

  public getModeleParam(parametre){
    return this.http.get('http://localhost:8090' + '/modeleByParam' + `/${parametre}`);
  }
}
