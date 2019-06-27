import { Component, OnInit } from '@angular/core';
import { ModeleService } from 'src/app/services/modele.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Modele } from 'src/app/entity/modele';
import { Marque } from 'src/app/entity/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-info-modele',
  templateUrl: './info-modele.component.html',
  styleUrls: ['./info-modele.component.css']
})
export class InfoModeleComponent implements OnInit {

  modele :Modele ;
  selectedMarque ='';
  idSelectedMArque : number ;
  resultat :Marque[] ;
  constructor(private modeleService : ModeleService,
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private marqueService : MarqueService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.modeleService.getModeleById(params.id).subscribe(
          (modele : Modele) =>
          {
            this.modele=modele;
            console.log(modele) ;
          }
        );
      }
    );
  }

  modifier(modele){
    this.modeleService.editModele(modele).subscribe(
      (response) =>
      {
        console.log("modele modifié") ;
        this.router.navigate(['/listModele']);
      }
    );

  }

  selectMarque(selectedMarque) {
    console.log(selectedMarque);
    this.selectedMarque = selectedMarque.des_marque;
    this.idSelectedMArque = selectedMarque.id_marque;
    this.resultat = [];
  }
  chercherMarque(parametre) {
    console.log(parametre);
    this.marqueService.getMarqueParam(parametre).subscribe(
      (marque: Marque[]) => {
        this.resultat = marque;
      }
    );
  }

}
