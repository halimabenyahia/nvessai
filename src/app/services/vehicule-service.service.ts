import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from '../entity/vehicule';
import { Observable } from 'rxjs';
import { MarqueService } from './marque.service';


@Injectable({
  providedIn: 'root'
})
export class VehiculeServiceService {

 vehicule : Vehicule ;
  
  constructor(private httpClient: HttpClient,
              private marqueService : MarqueService ) { }
  

  public getAllVehicule() {
    return this.httpClient.get('http://localhost:8091' + '/vehicules');
  }

  public addVehicule(vehicule) : Observable<any>{
    return this.httpClient.post('http://localhost:8091' + '/addVehicule' , vehicule );
  }

  public deleteVehicule(id_vehicule : number){
    return this.httpClient.delete('http://localhost:8091' + '/deleteVehicule' + `/${id_vehicule}`);
  }

  public editVehicule(vehicule) {
    return this.httpClient.put('http://localhost:8091' + '/editVehicules' ,vehicule);
  }

  public getByIdVehicule(id_vehicule){
    return this.httpClient.get('http://localhost:8091' + '/vehiculeById' + `/${id_vehicule}`);
  }

  public getbyImmatricle(chaine){
    return this.httpClient.get('http://localhost:8091/vehiculebyImmatriculation'+ `/${chaine}`)
  }

  public getVehiculeByCarburant(carburant){
    return this.httpClient.get('http://localhost:8091/vehiculebyCarburant'+`/${carburant}`);
  }

  public getVehiculeByAffectation(service){
    return this.httpClient.get('http://localhost:8091/vehiculebyAffectation'+`/${service}`);
  }

  public getNombreVehicule(){
    return this.httpClient.get('http://localhost:8091/nombreVehicule');
  }

  public getNombreVehiculePartner(){
    return this.httpClient.get('http://localhost:8091/nbPartner');
  }

  public getNombreVehiculeCamion(){
    return this.httpClient.get('http://localhost:8091/nbCamion');
  }

  public getNombreVehiculeVoiture(){
    return this.httpClient.get('http://localhost:8091/nbVoiture');
  }

  public getNombreEss(){
    return this.httpClient.get('http://localhost:8091/nbVoitureEss');
  }

  

 
}
