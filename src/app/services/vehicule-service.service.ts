import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../entity/vehicule';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

 vehicule : Vehicule ;
  

  constructor(private httpClient: HttpClient ) { }
  

  public getAllVehicule() {
    return this.httpClient.get('http://localhost:8080' + '/vehicules');
  }

  public addVehicule(vehicule) : Observable<any>{
    return this.httpClient.post('http://localhost:8080' + '/addVehicule' , vehicule );
  }

  public deleteVehicule(id_vehicule : string){
    return this.httpClient.delete('http://localhost:8080' + '/deleteVehicule' + `/${id_vehicule}`);
  }

  public editVehicule(vehicule) {
    return this.httpClient.put('http://localhost:8080' + '/editVehicules' ,vehicule);
  }

  public getByIdVehicule(id_vehicule){
    return this.httpClient.get('http://localhost:8080' + '/vehiculeById' + `/${id_vehicule}`);
  }

 
}
