import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeVService {

  constructor(private http : HttpClient) { }

  public getTypeVehicule(){
   return this.http.get('http://localhost:8080' + '/typeVehicules') ;
  }
}
