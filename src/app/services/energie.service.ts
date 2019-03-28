import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnergieService {

  constructor(private http:HttpClient) { }

  public getEnergie(){
   return this.http.get('http://localhost:8080' + '/energies');
  }
}
