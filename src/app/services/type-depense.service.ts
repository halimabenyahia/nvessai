import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeDepense } from '../entity/typeDepense';

@Injectable({
  providedIn: 'root'
})
export class TypeDepenseService {


  typeDepense : TypeDepense ;
  constructor(private http : HttpClient) { }

  public getAllTypeDepense(){
    return this.http.get('http://localhost:8091/typeDepenses');
  }

  public getByIdTypeDepense(id_typeDepense){
    return this.http.get('http://localhost:8091/typeDepenseById'+`/${id_typeDepense}`);
  }

  public addTypeDepense(typeDepense){
    return this.http.post('http://localhost:8091/addTypeDepense',typeDepense);
  }

  public deleteTypeDepense(id_typeDepense){
    return this.http.delete('http://localhost:8091/deleteTypeDepense'+`/${id_typeDepense}`)
  }

  public editTypeDepense(typeDepense){
    return this.http.put('http://localhost:8091/editTypeDepense',typeDepense)
  }

  public getTypedepenseParam(parametre){
    return this.http.get('http://localhost:8091/typedepenseByParam'+`/${parametre}`);
  }
}
