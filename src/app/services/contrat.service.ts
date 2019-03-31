import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  constructor(private http : HttpClient) { }

  public getContratAss(){
    return this.http.get('http://localhost:8080' + '/contratAssurance');
  }
}
