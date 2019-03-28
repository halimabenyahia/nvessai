import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {

  
  public chauffeurs : any[] ;

  constructor( private http: HttpClient) { }

 public getAllChauffeur() {
   return this.http.get('http://localhost:8080' + '/chauffeurs') ;

  }

 // public getByIdChauffeur(id_chauff){
  //  return this.http.get<any[]>(this.url + '/findById/' + id_chauff)


  //}

  //public addChauffeur(chauffeur) {
   // return this.http.post(this.url + '/addChauffeur', chauffeur, { observe: 'response' });
  //}

  //public editChauffeur(chauffeur){
   // return this.http.put(this.url + '/editChauffeur' , chauffeur, { observe: 'response' })

  //}


 // public deleteChauffeur(id_chauff) {
  //  return this.http.delete(this.url + '/deleteChauffeur/' + id_chauff);
 // }



}
