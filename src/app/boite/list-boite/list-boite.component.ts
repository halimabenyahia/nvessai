import { Component, OnInit } from '@angular/core';
import { BoiteService } from 'src/app/services/boite.service';
import { Router } from '@angular/router';
import { Boite } from 'src/app/entity/boite';

@Component({
  selector: 'app-list-boite',
  templateUrl: './list-boite.component.html',
  styleUrls: ['./list-boite.component.css']
})
export class ListBoiteComponent implements OnInit {

  boites :Boite[]=[]; 
  link ;
  config : any ;
  constructor(private BoitesService : BoiteService,
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
    this.BoitesService.getTypeBoite()
    .subscribe(
      (value  : any[]) =>
      {this.boites=value ;
      console.log(this.boites)}
    );
   
  }

  delete(id_typeBoite){
    this.BoitesService.supprimer(id_typeBoite).subscribe(
      (response) =>
      {
        console.log("type boite supprimé") ;
        const link='listBoite' ;
        this.router.navigate(['/addBoite']);
      }
    );
  }

  edit(id_typeBoite){
    this.router.navigate(['/editBoite',id_typeBoite]);
  }


}
