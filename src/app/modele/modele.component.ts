import { Component, OnInit } from '@angular/core';
import { Marque } from '../entity/marque';
import { MarqueService } from '../services/marque.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModeleService } from '../services/modele.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {

  selectedMarque='';
  idSelectedMArque: number ;
  resultat: Marque[];

  constructor(private marqueService : MarqueService,
              private modeleService : ModeleService,
              private router : Router) { }

  ngOnInit() {
  }

  add(formulaire : NgForm){
    this.modeleService.addModele(formulaire.value).subscribe(
      (response) =>
      {
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
