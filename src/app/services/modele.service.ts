import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  constructor(private http : HttpClient) { }

  public getModeles(){
    return this.http.get('http://localhost:8080' + '/modeles') ;
  }
}
