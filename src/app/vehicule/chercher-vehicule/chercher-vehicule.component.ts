import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';
import { EnergieService } from 'src/app/services/energie.service';
import { Energie } from 'src/app/entity/energie';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AffectationService } from 'src/app/services/affectation.service';
import { Affectation } from 'src/app/entity/affectation';

@Component({
  selector: 'app-chercher-vehicule',
  templateUrl: './chercher-vehicule.component.html',
  styleUrls: ['./chercher-vehicule.component.css']
})
export class ChercherVehiculeComponent implements OnInit {

  vehicule : Vehicule ;
  vehicules : Vehicule[];
  idSelectedVehicule : number ;
  selectedVehicule='';
  idSelectedEnergie :number ;
  energieV : Energie[];
  selectedEnergie='';
  affect : Affectation [] ;
  idSelectedAffectation : number ;
  affectation : Affectation [] ;
  selectedAffectation ='' ;
 // affectation : Affectation ;
  constructor(private vehiculeService : VehiculeServiceService,
              private energieService : EnergieService,
              private router : Router,
              private affectationService : AffectationService) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule : Vehicule) =>
      {
        this.vehicule=vehicule;
      }
    );

    this.affectationService.getAffectation().subscribe(
      (affectation: Affectation []) => {
        this.affectation = affectation;
      }
    );
  }

  chercherEnergie(parametre){
    this.energieService.getEnergieParam(parametre).subscribe(
      (energie : Energie[])=>
      {
        this.energieV=energie;
      }
    );
  }
selectEnergie(selectedEnergie){
    console.log(selectedEnergie);
    this.selectedEnergie = selectedEnergie.des_energie ;
    this.idSelectedEnergie = selectedEnergie.id_energie;
    this.energieV= [];
    const p =selectedEnergie.des_energie;
    console.log(p);
  }

  chercherAffectation(parametre){
    this.affectationService.getAffectationParam(parametre).subscribe(
      (affectation : Affectation []) =>
      {
        this.affect = affectation ;
      }
    );
  }
selectAffectation(selectedAffectation){
    console.log(selectedAffectation);
    this.selectedAffectation = selectedAffectation.des_affectation;
    this.idSelectedAffectation = selectedAffectation.id_affectation ;
    this.affect = [] ;
  }

chercher1(parametre){
    this.router.navigate(['/resultat',parametre]);
  }

  chercher(parametre){
    this.router.navigate(['resultAffectation',parametre]);
  }

}
