import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepensePieceService } from 'src/app/services/depense-piece.service';
import { Depense_piece } from 'src/app/entity/depense_piece';

@Component({
  selector: 'app-info-depense-piece',
  templateUrl: './info-depense-piece.component.html',
  styleUrls: ['./info-depense-piece.component.css']
})
export class InfoDepensePieceComponent implements OnInit {

  depensePieces : Depense_piece ;

  constructor(private activatedRoute : ActivatedRoute,
              private depensePieceService : DepensePieceService,
              private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);

        this.depensePieceService.getDepensePieceById(params.id).subscribe(
          (depensePiece: Depense_piece) => {
            this.depensePieces = depensePiece;
            
            //console.log(vehicule);
          }
        );
      }
    );
  }

  returnToList(){
    this.router.navigate(['listDepensePiece']);
  }

}
