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
  constructor(private BoitesService : BoiteService,
              private router : Router) { }

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
        this.router.navigate(this.link);
      }
    );
  }

  edit(id_typeBoite){
    this.router.navigate(['Boite/editBoite',id_typeBoite]);
  }


}
