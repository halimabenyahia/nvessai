import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { Vehicule } from '../entity/vehicule';
import { EnergieService } from '../services/energie.service';
import { Energie } from '../entity/energie';
import { Router } from '@angular/router';
import { DepenseService } from '../services/depense.service';
import { Depense } from '../entity/depense';
import { DepenseResponse } from '../entity/depenseResponse';

@Component({
  selector: 'app-filtrage',
  templateUrl: './filtrage.component.html',
  styleUrls: ['./filtrage.component.css']
})
export class FiltrageComponent implements OnInit {

/*  vehicule : Vehicule ;
  vehicules : Vehicule[];
  idSelectedVehicule : number ;
  selectedVehicule='';
  selectedEnergie=''
  energies : Energie ;
  idSelectedEnergie :number ;
  energieV : Energie[];
  depense : Depense  ;
  */
 depenseResponse : DepenseResponse ;
 depenseResponses : DepenseResponse [] ;
  constructor(private vehiculeService :VehiculeServiceService,
              private router : Router ,
              private depenseService : DepenseService) { }

  ngOnInit() {
    this.depenseService.getSumDepenses().subscribe(
      (value : any []) =>
      {
        this.depenseResponses=value ;
        console.log(this.depenseResponses);
      }
    );
   /* this.depenseService.getSumMonth1(parametre).subscribe(
      (response) =>
       {
         console.log(response);
       }
    ); */
  }

/*  chercherVehicule(parametre){
    this.vehiculeService.getbyImmatricle(parametre).subscribe(
      (vehicule : Vehicule[]) =>
      {
        this.vehicules=vehicule;
      }
    );
  }
  selectVehicule(selectedVehicule){
    console.log(selectedVehicule);
    this.selectedVehicule = selectedVehicule.immatriculation ;
    this.idSelectedVehicule = selectedVehicule.id_vehicule;
    this.vehicules=[];
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
*/
  goToFiltre(){
    this.router.navigate(['/filtrage/filtre']);
  }

  GoTograh(immatriculation)
  {
    this.router.navigate(['filtrage/graphe',immatriculation]);
  }



}
