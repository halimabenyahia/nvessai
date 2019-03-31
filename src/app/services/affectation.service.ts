import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  constructor(private http : HttpClient) { }

  public getAffectation(){
    return this.http.get('http://localhost:8080' + '/affectations') ;
  }
}
