import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modele } from '../entity/modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  modele : Modele [] ;

  constructor(private http : HttpClient) { }

  public getModeles(){
    return this.http.get('http://localhost:8080' + '/modeles') ;
  }

  public addModele(modele) : Observable<any>{
    return this.http.post('http://localhost:8080/addModele',modele);
  }

  public supprimerModele(id_modele){
    return this.http.delete('http://localhost:8080/deleteModele' + `/${id_modele}`);
  }

  public editModele(modele){
    return this.http.put('http://localhost:8080' + '/editModele' , modele) ;
  }

  public getModeleById(id_modele){
    return this.http.get('http://localhost:8080' + '/modeleById' +`/${id_modele}` );
  }
}
