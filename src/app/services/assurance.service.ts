import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assurance } from '../entity/assurance';

@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  assurance : Assurance[];
  link='http://localhost:8080/addAssurance';
  constructor(private http : HttpClient) { }

  public getAssurrance(){
    return this.http.get('http://localhost:8091' + '/Assurance');
  }
  public addAssurance(assurance){
    return this.http.post('http://localhost:8091/addAssurance',assurance);
  }

  public supprimer(id_assurance){
   return this.http.delete('http://localhost:8091'+'/deleteAssurance' +`/${id_assurance}`);
  }

  public editAssurance(assurance){
    return this.http.put('http://localhost:8091' + '/editAssurance' ,assurance);
  }

  public getAssuranceById(id_assurance){
    return this.http.get('http://localhost:8091' + '/AssuranceByid' +`/${id_assurance}`);
  }


  public getAssuranceParam(parametre){
    return this.http.get('http://localhost:8091' + '/assuranceByParam' + `/${parametre}`);
  }

}
