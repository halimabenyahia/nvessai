import { Component, OnInit } from '@angular/core';
import { PieceService } from 'src/app/services/piece.service';
import { Piece } from 'src/app/entity/piece';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.css']
})
export class ListPieceComponent implements OnInit {

  piece : Piece[] ;
  pieces : Piece[]=[] ;
  constructor(private pieceService : PieceService,
              private router : Router) { }

  ngOnInit() {
    this.pieceService.getAllPiece().subscribe(
      (value: any[]) => {
        this.pieces = value;
       console.log(this.pieces)
      });
  }

  delete(id_piece,index){
    this.pieceService.deletePiece(id_piece)
    .subscribe(
      (value) => {
        console.log('piece supprimé !');
        this.router.navigate(['/pieces']);    
  }
  );
}

gotoInfo(id_piece){
  console.log("goto Edit")
 // const link1='/editChauffeur';
  this.router.navigate(['/editPiece/',id_piece]) ;
}

}
