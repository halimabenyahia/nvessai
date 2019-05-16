import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depense } from '../entity/depense';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  depense : Depense ;
  constructor(private http : HttpClient) { }

  public getDepenses(){
    return this.http.get('http://localhost:8091/listdepenses');
  }

  public addDepense(depense){
    return this.http.post('http://localhost:8091/addDepense',depense);
  }

  public supprimer(id_depense){
    return this.http.delete('http://localhost:8091/deleteDepense' +`/${id_depense}`);
  }

  public edit(depense){
    return this.http.put('http://localhost:8091/editDepense' ,depense );
  }

  public getSumMonth1(parametre){
    return this.http.get('http://localhost:8091/sumMonth1'+`/${parametre}`);

  }

  public getDepensesById(id_depense){
    return this.http.get('http://localhost:8091/depenses'+`/${id_depense}`);
  }

  public getSumDepenses(){
    return this.http.get('http://localhost:8091/depensesSum');
  }

  public getSumDepenceByImm(parametre){
    return this.http.get('http://localhost:8091/sumdepenseByimm'+`/${parametre}`);
  }

  
}
