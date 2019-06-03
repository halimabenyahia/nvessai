import { Component, OnInit } from '@angular/core';
import { ModeleService } from 'src/app/services/modele.service';
import { Modele } from 'src/app/entity/modele';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-modele',
  templateUrl: './list-modele.component.html',
  styleUrls: ['./list-modele.component.css']
})
export class ListModeleComponent implements OnInit {

  modeles : Modele[] = [] ;
  link ;
  constructor(private modeleService : ModeleService,
              private router : Router) { }

  ngOnInit() {
    this.modeleService.getModeles()
    .subscribe(
      (value : any[]) =>
      {
        this.modeles=value ;
        console.log(this.modeles) ;
      }
    );
  }

  delete(id_modele){
    this.modeleService.supprimerModele(id_modele).subscribe(
      (response) =>
      {
        console.log("modele supprimé") ;
        const link ='listModele' ;
        this.router.navigate(['listModele']) ;
      }
    );
  }

  edit(id_modele){
    this.router.navigate(['/editModele',id_modele]);
  }



}
