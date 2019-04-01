import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Energie } from '../entity/energie';

@Injectable({
  providedIn: 'root'
})
export class EnergieService {

  link='http://localhost:8080/addEnergie';
  energie : Energie[];
  constructor(private http:HttpClient) { }

  public getEnergie(){
   return this.http.get('http://localhost:8080' + '/energies');
  }

  public addEnergie(energie){
    return this.http.post(this.link,energie);
  }




}
