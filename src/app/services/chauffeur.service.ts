import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chauffeur } from '../entity/chauffeur';


@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  
  chauffeur : Chauffeur ;
  link ='http://localhost:8080/addChauffeur';
  link2='http://localhost:8080/editChauffeur/' ;

  constructor( private http: HttpClient) { }

 public getAllChauffeur()  {
   return this.http.get('http://localhost:8091' + '/chauffeurs') ;
  }

  public supprimer(id_chauffeur : number) {
    return this.http.delete('http://localhost:8091' + '/deleteChauffeur' + `/${id_chauffeur}`);
  }

  public addChauffeur(chauffeur) : Observable<any> {
    return this.http.post('http://localhost:8091/addChauffeur', chauffeur);
  }

  public edit(chauffeur){
    return this.http.put('http://localhost:8091/editChauffeur', chauffeur) ;
  }

  public getChauffeursById(id_chauffeur){
    return this.http.get('http://localhost:8091' + '/chauffeurById' + `/${id_chauffeur}`);
  }

  public getChauffeurParam(parametre){
    return this.http.get('http://localhost:8091' + '/chauffeurByParam' + `/${parametre}`);
  }


}
