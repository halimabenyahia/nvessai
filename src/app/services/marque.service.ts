import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marque } from '../entity/marque';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  marque : Marque;

  constructor(private http : HttpClient) { }

  public getMarques(){
    return this.http.get('http://localhost:8080' + '/marques');
  }

  public addMarque(marque) : Observable<any>{
    return this.http.post('http://localhost:8080/addMarque' ,marque);
  }

  public supprimerMarque(id_marque){
    return this.http.delete('http://localhost:8080/deleteMarque' + `/${id_marque}`);
  }

  public editMarque(marque){
    return this.http.put('http://localhost:8080' + '/editMarque' , marque);
  }

  public getMarquesById(id_marque : number){
    return this.http.get('http://localhost:8080' + '/marqueById' +`/${id_marque}` );
  }

  public getMarqueParam(parametre){
    return this.http.get('http://localhost:8080' + '/marqueByParam/'+ parametre);
  }
  
}
