import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeVehicule } from '../entity/typeVehicule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeVehiculeService {

  typeVehicule: TypeVehicule[];
  link='http://localhost:8080/addtypeVehicule' ;
  constructor(private http : HttpClient) { }

  public getTypeVehicule(){
    return this.http.get('http://localhost:8080' + '/typeVehicules');
  }

  public addTypeV(typeVehicule) : Observable<any> {
    return this.http.post(this.link, typeVehicule);
  }


}
