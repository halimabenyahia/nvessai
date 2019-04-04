import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Energie } from '../entity/energie';

@Injectable({
  providedIn: 'root'
})
export class EnergieService {

  
  energie : Energie[];
 
  constructor(private http:HttpClient) { }

  public getEnergie(){
   return this.http.get('http://localhost:8080' + '/energies');
  }

  public addEnergie(energie){
    return this.http.post('http://localhost:8080/addEnergie',energie);
  }

  public supprimerEnergie(id_energie){
    return this.http.delete('http://localhost:8080/deleteEnergie' +`/${id_energie}`);
  }

  public edit(energie){
    return this.http.put('http://localhost:8080'+'/editEnergie',energie);
  }

  public getEnergieById(id_energie){
    return this.http.get('http://localhost:8080' + '/energieById' +`/${id_energie}`);
  }




}
