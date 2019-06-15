import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depense_piece } from '../entity/depense_piece';

@Injectable({
  providedIn: 'root'
})
export class DepensePieceService {

  depense_piece : Depense_piece ;
  constructor(private http : HttpClient) { }

  public getDepensePieceList(){
    return this.http.get('http://localhost:8091/depensePieceList');
  }

  public getDepensePieceById(id_depense_piece){
    return this.http.get('http://localhost:8091/depensePieceById'+ `/${id_depense_piece}`);
  }

  public addDepensePiece(depense_piece){
    console.log(depense_piece);
   // console.log(depense_piece.id_depense);
    return this.http.post('http://localhost:8091/adddepensePiece',depense_piece);
  }

  public supprimer(id_depense_piece){
return this.http.delete('http://localhost:8091/deletedepensePiece'+`/${id_depense_piece}`);
  }

  public edit(depense_piece){
    return this.http.put('http://localhost:8091/editdepensePiece',depense_piece);
  }
}
