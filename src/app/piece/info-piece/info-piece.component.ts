import { Component, OnInit } from '@angular/core';
import { PieceService } from 'src/app/services/piece.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Piece } from 'src/app/entity/piece';
import { TypePieceService } from 'src/app/services/type-piece.service';
import { TypePiece } from 'src/app/entity/typePiece';

@Component({
  selector: 'app-info-piece',
  templateUrl: './info-piece.component.html',
  styleUrls: ['./info-piece.component.css']
})
export class InfoPieceComponent implements OnInit {

  piece : Piece ;
  typeP : TypePiece [] ;
  selectedTypePiece='';
  idSelectedTypePiece : number ;
  typePiece : TypePiece ;
  typePieces : TypePiece[];
  constructor(private pieceService :PieceService,
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private typePieceService : TypePieceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.pieceService.getByIdPiece(params.id).subscribe(
          (piece : Piece) =>
          {
            this.piece=piece;
            console.log(piece);
          }
        );
      }
    );

    this.typePieceService.getAllTypePiece().subscribe(
      (typePiece: TypePiece) => 
      { 
        this.typePiece = typePiece; 
      });
  }

  update(piece) {
    this.pieceService.editPiece(piece).subscribe(
      (response) =>
      {
        console.log("piece modifié");
        this.router.navigate(['/listPiece']) ;
      }
     );
  }


  chercherTypePiece(parametre){
    this.typePieceService.getTypePieceParam(parametre).subscribe(
      (typePiece : TypePiece[]) =>
      {
        this.typePieces=typePiece;
        console.log(typePiece);
      }
    );
  }
  selectTypePiece(selectedTypePiece){
    console.log(selectedTypePiece);
    this.selectedTypePiece = selectedTypePiece.des_typePiece ;
    this.idSelectedTypePiece = selectedTypePiece.id_typePiece;
    this.typePieces=[];
    
  }

    gotoList(){
      this.router.navigate(['/listPiece']);
    }

}
