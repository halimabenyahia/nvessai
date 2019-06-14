import { Component, OnInit } from '@angular/core';
import { DepensePieceService } from 'src/app/services/depense-piece.service';
import { Depense_piece } from 'src/app/entity/depense_piece';
import { Depense } from 'src/app/entity/depense';
import { DepenseService } from 'src/app/services/depense.service';

@Component({
  selector: 'app-list-depense-piece',
  templateUrl: './list-depense-piece.component.html',
  styleUrls: ['./list-depense-piece.component.css']
})
export class ListDepensePieceComponent implements OnInit {

  config : any ;
  depensePieces : Depense_piece[] ;
  depense : Depense [] ;

  constructor(private depensePieceService : DepensePieceService,
              private depenseService : DepenseService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1
     };
   }

   pageChanged(event) {
    this.config.currentPage = event;
  }
   

  ngOnInit() {
    this.depensePieceService.getDepensePieceList().subscribe(
      (value : any[]) =>
      {
        this.depensePieces = value ;
      }
    );

    this.depenseService.getDepenses().subscribe(
      (value : any[]) =>
      {
        this.depense = value ;
      }
    );
  }

}
