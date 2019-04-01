import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marque } from '../entity/marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  marque : Marque[];
  link=''
  constructor(private http : HttpClient) { }

  public getMarques(){
    return this.http.get('http://localhost:8080' + '/marques');
  }

  public addMarque(){
    return this.http.post(this.link,)
  }
  
}
