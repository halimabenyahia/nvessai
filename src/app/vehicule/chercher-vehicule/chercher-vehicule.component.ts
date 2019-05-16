import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';
import { EnergieService } from 'src/app/services/energie.service';
import { Energie } from 'src/app/entity/energie';
import { Router } from '@angular/router';

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
  constructor(private vehiculeService : VehiculeServiceService,
              private energieService : EnergieService,
              private router : Router) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule : Vehicule) =>
      {
        this.vehicule=vehicule;
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
  }
  chercher(){
    this.router.navigate(['Vehicule/resultat']);
  }

}
