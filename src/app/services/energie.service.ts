import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Energie } from '../entity/energie';

@Injectable({
  providedIn: 'root'
})
export class EnergieService {

  link='http://localhost:8080/addEnergie';
  energie : Energie[];
  link2='http://localhost:8080/deleteEnergie'
  constructor(private http:HttpClient) { }

  public getEnergie(){
   return this.http.get('http://localhost:8080' + '/energies');
  }

  public addEnergie(energie){
    return this.http.post(this.link,energie);
  }

  public supprimerEnergie(id_energie){
    return this.http.delete(this.link2 +`/${id_energie}`);
  }

  public edit(energie){
    return this.http.put('http://localhost:8080'+'/editEnergie',energie);
  }




}
