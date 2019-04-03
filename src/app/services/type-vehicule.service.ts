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
  link2='http://localhost:8080/deleteTypeVehicule/' ;
  constructor(private http : HttpClient) { }

  public getTypeVehicule(){
    return this.http.get('http://localhost:8080' + '/typeVehicules');
  }

  public addTypeV(typeVehicule) : Observable<any> {
    return this.http.post(this.link, typeVehicule);
  }

  public supprimerTypeV(id_typeVehicule){
    return this.http.delete(this.link +`/${id_typeVehicule}`) ;
  }

  public edittypeVehicule(typeVehicule){
    return this.http.put('http://localhost:8080'+'/editTypeVehicule' , typeVehicule) ;
  }


}
