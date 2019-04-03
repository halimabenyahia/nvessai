import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modele } from '../entity/modele';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  modele : Modele [] ;
  link='http://localhost:8080/addModele';
  link2='http://localhost:8080/deleteModele/' ;
  constructor(private http : HttpClient) { }

  public getModeles(){
    return this.http.get('http://localhost:8080' + '/modeles') ;
  }

  public addModele(modele) : Observable<any>{
    return this.http.post(this.link,modele);
  }

  public supprimerModele(id_modele){
    return this.http.delete(this.link2+ `/${id_modele}`);
  }

  public editModele(modele){
    return this.http.put('http://localhost:8080' + '/editModele' , modele) ;
  }
}
