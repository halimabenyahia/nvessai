import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

  public vehicule : any[];
  

  constructor(private httpClient: HttpClient ) { }
  

  public getAllVehicule() {
    return this.httpClient.get('http://localhost:8080' + '/vehicules');
  }

  public addVehicule(vehicule){
    return this.httpClient.post('http://localhost:8080' + '/addVehicule' , vehicule , );
  }

 
}
