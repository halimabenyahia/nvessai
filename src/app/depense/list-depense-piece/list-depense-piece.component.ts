import { Component, OnInit } from '@angular/core';
import { DepensePieceService } from 'src/app/services/depense-piece.service';
import { Depense_piece } from 'src/app/entity/depense_piece';
import { Depense } from 'src/app/entity/depense';
import { DepenseService } from 'src/app/services/depense.service';
import { Router } from '@angular/router';

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
              private depenseService : DepenseService,
              private router : Router) {
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

  delete(id_depense_piece,index){
    this.depensePieceService.supprimer(id_depense_piece).subscribe(
      (response) =>
      {
        console.log("depense piece supprimée");
        //this.router.navigate(['/depenses']);
      }
    );

  }

  gotoInfo(id_depense_piece){
    this.router.navigate(['']);
  }

  gotoSumByMonth(){
    this.router.navigate(['sommeDepensePiece']);
  }

  gotoAdd(){
    this.router.navigate(['depenses']);

  }
  gotoDetail(id_depense_piece){
    this.router.navigate(['detailDepensePiece/',id_depense_piece]);
  }

}
