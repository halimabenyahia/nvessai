import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Piece } from '../entity/piece';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  piece : Piece ;
  constructor(private http : HttpClient) { }

  public getAllPiece(){
    return this.http.get('http://localhost:8091/pieces');
  }

  public getByIdPiece(id_piece){
    return this.http.get('http://localhost:8091/pieceById' + `/${id_piece}`);
  }

  public addPiece(piece){
    return this.http.post('http://localhost:8091/addPiece',piece);
  }

  public deletePiece(id_piece){
    return this.http.delete('http://localhost:8091/deletePiece'+ `/${id_piece}` );
  }

  public editPiece(piece){
    return this.http.put('http://localhost:8091/editPiece',piece);
  }

  public getbyDespiece(parametre){
   /* var r="http://localhost:8091/piecebyDes/"+"hello";
    console.log("service:+"+r);
return this.http.get(r);*/
    return this.http.get('http://localhost:8091/piecebyDes'+ `/${parametre}`);
  }
  
}
