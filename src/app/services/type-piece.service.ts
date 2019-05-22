import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypePiece } from '../entity/typePiece';

@Injectable({
  providedIn: 'root'
})
export class TypePieceService {

  typePiece : TypePiece ;
  constructor(private http : HttpClient) { }

  public getAllTypePiece(){
    return this.http.get('http://localhost:8091/typepieces');
  }

  public getByIdtypePiece(id_typePiece){
    return this.http.get('http://localhost:8091/TypepieceById'+`/${id_typePiece}`);
  }

  public addTypePiece(typePiece){
    return this.http.post('http://localhost:8091/addTypePiece',typePiece);
  }

  public deletetypePiece(id_typePiece){
    return this.http.delete('http://localhost:8091/deleteTypePiece'+`/${id_typePiece}`);
  }

  public edittypePiece(typePiece){
    return this.http.put('http://localhost:8091/editTypePiece',typePiece);
  }

  public getTypePieceParam(parametre){
    return this.http.get('http://localhost:8091/typePieceByParam/'+`/${parametre}`);
  }
}
