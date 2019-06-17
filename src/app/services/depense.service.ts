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

  public getSumDepenceByImm(matricule,type){
    var r="http://localhost:8091/sumdepenseByimm/"+matricule;
    console.log("service:+"+r);
    return this.http.get(r);
  //  return this.http.get('http://localhost:8091/sumdepenseByimm/'+matricule+ `/${type}`);
  }

 public getDernierDepense(){
   return this.http.get('http://localhost:8091/maxIdDepense');
 }

 getSumCarburant(){
   return this.http.get('http://localhost:8091/sommeCarbu');
 }

 public getSumDepenceCarburantByImm(matricule){
   matricule = "200tu2000" ;
   console.log("matricule service"+matricule);
  var r="http://localhost:8091/sumdepensePieceByimm/"+matricule;
  console.log("service:+"+r);
  return this.http.get(r);
  // return this.http.get('http://localhost:8091/sumdepensePieceByimm/'+matricule);
 }

  
}
