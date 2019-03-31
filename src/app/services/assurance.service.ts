import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  constructor(private http : HttpClient) { }

  public getAssurrance(){
    return this.http.get('http://localhost:8080' + '/Assurance');
  }
}
