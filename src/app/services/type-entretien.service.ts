import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeEntretien } from '../entity/typeEntretien';

@Injectable({
  providedIn: 'root'
})
export class TypeEntretienService {

  typeEntretien : TypeEntretien;
  constructor(private http : HttpClient) { }

  public getAlltypeEntretiens(){
    return this.http.get('http://localhost:8091/typeEntretiens');
  }

  public getByIdTypeEntretien(id_typeEntretien){
    return this.http.get('http://localhost:8091/typeEntretienById'+`/${id_typeEntretien}`);
  }

  public addtypeEntretien(typeEntretien){
    return this.http.post('http://localhost:8091/addTypeEntretien',typeEntretien);
  }

  public deleteTypeEntretien(id_typeEntretien){
    return this.http.delete('http://localhost:8091/deleteTypeEntretien'+`/${id_typeEntretien}`);
  }

  public editTypeEntretien(typeEntretien){
    return this.http.put('http://localhost:8091/editTypeEntretien',typeEntretien);
  }

  public getTypeEntretienbyDes(parametre){
    return this.http.get('http://localhost:8091/typeEntretienByDes'+`/${parametre}`);
  }
}
