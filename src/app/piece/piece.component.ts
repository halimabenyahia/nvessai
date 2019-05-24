import { Component, OnInit } from '@angular/core';
import { PieceService } from '../services/piece.service';
import { TypePieceService } from '../services/type-piece.service';
import { Piece } from '../entity/piece';
import { TypePiece } from '../entity/typePiece';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

  piece : Piece ;
  typeP : TypePiece [] ;
  selectedTypePiece='' ;
  idSelectedtypePiece : number ;
  typePiece : TypePiece ;
  constructor(private pieceService : PieceService,
              private typePieceService : TypePieceService,
              private router : Router) { }

  ngOnInit() {
    this.typePieceService.getAllTypePiece().subscribe(
      (piece: Piece) => 
      { 
        this.piece = piece; 
      });
  }

  chercherTypePiece(parametre){
    this.typePieceService.getTypePieceParam(parametre).subscribe(
      (typePiece : TypePiece[]) =>
      {
        
        this.typeP=typePiece ;
        console.log(typePiece);
      }
    );
  }
  selectTypeP(selectedTypePiece){
    console.log(selectedTypePiece);
    this.selectedTypePiece = selectedTypePiece.des_typePiece;
    this.idSelectedtypePiece = selectedTypePiece.id_typePiece ;
    this.typeP = [];
    console.log(this.typeP);
    }

    add(formulaire : NgForm){
      this.pieceService.addPiece(formulaire.value).subscribe(
        (response) =>
        {
          console.log(response) ;
          this.router.navigate(['/listPiece']);
        }
      );
    }

}
