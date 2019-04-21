import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeVehicule } from '../entity/typeVehicule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeVehiculeService {

  typeVehicule: TypeVehicule;
 
  constructor(private http : HttpClient) { }

  public getTypeVehicule(){
    return this.http.get('http://localhost:8090' + '/typeVehicules');
  }

  public addTypeV(typeVehicule) : Observable<any> {
    return this.http.post('http://localhost:8090/addtypeVehicule', typeVehicule);
  }

  public supprimerTypeV(id_typeVehicule){
    return this.http.delete('http://localhost:8090/deleteTypeVehicule'+`/${id_typeVehicule}`) ;
  }

  public edittypeVehicule(typeVehicule){
    return this.http.put('http://localhost:8090'+'/editTypeVehicule' , typeVehicule) ;
  }

  public getTypeVehiculeById(id_typeVehicule){
    return this.http.get('http://localhost:8090' + '/typeVehiculeById' + `/${id_typeVehicule}`) ;
  }


  public getTypevehiculeParam(parametre){
    return this.http.get('http://localhost:8090' + '/typevehiculeByParam' + `/${parametre}`);
  }



}
