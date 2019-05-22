import { Component, OnInit } from '@angular/core';
import { TypePieceService } from 'src/app/services/type-piece.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TypePiece } from 'src/app/entity/typePiece';

@Component({
  selector: 'app-info-type-piece',
  templateUrl: './info-type-piece.component.html',
  styleUrls: ['./info-type-piece.component.css']
})
export class InfoTypePieceComponent implements OnInit {

  typePiece : TypePiece ;
  constructor(private typePieceService : TypePieceService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }
              
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.typePieceService.getByIdtypePiece(params.id).subscribe(
          (typePiece : TypePiece) =>
          {
            this.typePiece=typePiece ;
            console.log(typePiece) ;
          }
        );
      }
    );
  }

  modifier(typePiece){
    this.typePieceService.edittypePiece(typePiece).subscribe(
      (response) =>
      {
        console.log("type modifié");
        this.router.navigate(['typePieces/listTypePiece']);
      }
    );

  }

}
