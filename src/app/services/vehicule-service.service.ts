import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

  public vehicule : any[];
  url = 'http://localhost:8080' ;

  constructor(private httpClient: HttpClient ) { }
  

  public getAllVehicule() {
    return this.httpClient.get<any[]>(this.url + '/vehicules')
  }

 
}
