import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContratAssurance } from '../entity/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contratAss : ContratAssurance ;
  
  constructor(private http : HttpClient) { }

  public getContratAss(){
    return this.http.get('http://localhost:8080' + '/contratAssurance');
  }

  public addContrat(contratAss){
    return this.http.post('http://localhost:8080/addContrat',contratAss) ;
  }

  public supprimer(id_contrat){
    return this.http.delete('http://localhost:8080'+'/deleteContratAss/'+ `/${id_contrat}`);
  }

  public editContrat(contrat : ContratAssurance){
    return this.http.put('http://localhost:8080' + '/editcontrat/' , contrat);
  }

  public getContratAssById(id_contrat){
    return this.http.get('http://localhost:8080' + '/contratAssrance' + `/${id_contrat}`);
  }

  
}
