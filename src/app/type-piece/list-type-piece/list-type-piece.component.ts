import { Component, OnInit } from '@angular/core';
import { TypePiece } from 'src/app/entity/typePiece';
import { TypePieceService } from 'src/app/services/type-piece.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-type-piece',
  templateUrl: './list-type-piece.component.html',
  styleUrls: ['./list-type-piece.component.css']
})
export class ListTypePieceComponent implements OnInit {

  typePiece : TypePiece [] ;
  config : any ;
  constructor(private typePieceService : TypePieceService,
              private router : Router) { 
                this.config = {
                  itemsPerPage: 3,
                  currentPage: 1
                 };
              } 
         
           pageChanged(event) {
             this.config.currentPage = event;
           }
              

  ngOnInit() {
    this.typePieceService.getAllTypePiece().subscribe(
      (value : any[])=>
      {this.typePiece= value;
      console.log(this.typePiece)
      }
    );
  }

  edit(id_typePiece){
    this.router.navigate(['/editTypePiece',id_typePiece]);
  }

  delete(id_typePiece){
    this.typePieceService.deletetypePiece(id_typePiece).subscribe(
      (response) =>
      {
        console.log("type supprimé") ;
        this.router.navigate(['/listTypePiece']);
      }
    );
  }

}
