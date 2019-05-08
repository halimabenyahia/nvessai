import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { Vehicule } from '../entity/vehicule';
import { EnergieService } from '../services/energie.service';
import { Energie } from '../entity/energie';

@Component({
  selector: 'app-filtrage',
  templateUrl: './filtrage.component.html',
  styleUrls: ['./filtrage.component.css']
})
export class FiltrageComponent implements OnInit {

  vehicule : Vehicule ;
  vehicules : Vehicule[];
  idSelectedVehicule : number ;
  selectedVehicule='';
  selectedEnergie=''
  energies : Energie ;
  constructor(private vehiculeService :VehiculeServiceService,
              private energieService : EnergieService ) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule : Vehicule) =>
      {
        this.vehicule=vehicule;
      }
    );

    this.energieService.getEnergie().subscribe(
      (energie : Energie)=>
      {
        console.log(energie);
        this.energies=energie;
      }
    );
  }

  chercherVehicule(parametre){
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

  chercherEnergie(){

  }

}
