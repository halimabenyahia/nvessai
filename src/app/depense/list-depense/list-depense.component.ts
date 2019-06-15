import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { Router } from '@angular/router';
import { Depense } from 'src/app/entity/depense';
import { Depense_piece } from 'src/app/entity/depense_piece';
import { DepensePieceService } from 'src/app/services/depense-piece.service';



@Component({
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit {

  depense : Depense [];
  config : any ;
  depensepiece : Depense_piece [] ;

  constructor(private depenseService : DepenseService,
              private depensePieceService : DepensePieceService,
              private router : Router
              ) {
                this.config = {
                  itemsPerPage: 5,
                  currentPage: 1
                 };
               }

               pageChanged(event) {
                this.config.currentPage = event;
              }

  ngOnInit() {
    this.depenseService.getDepenses().subscribe(
      (value : any[]) =>
      {
        this.depense=value ;
        console.log(this.depense);
      }
    );

    this.depensePieceService.getDepensePieceList().subscribe(
      (value : any[]) =>
      {
        this.depensepiece = value ;
      }
    );
  }

  gotoInfo(id_depense){
    this.router.navigate(['depenses/editDepense',id_depense]);
  }

  delete(id_depense,i){
    this.depenseService.supprimer(id_depense).subscribe(
      (response) =>
      {
        //this.toastr.success("Hello, I'm the toastr message.")
        this.router.navigate(['/listDepense']);
      }
    );
  }

}
