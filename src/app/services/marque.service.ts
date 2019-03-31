import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http : HttpClient) { }

  public getMarques(){
    return this.http.get('http://localhost:8080' + '/marques');
  }
}
