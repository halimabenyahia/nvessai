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
    return this.http.get('http://localhost:8080' + '/Assurance');
  }
  public addAssurance(assurance){
    return this.http.post(this.link,assurance);
  }


}
