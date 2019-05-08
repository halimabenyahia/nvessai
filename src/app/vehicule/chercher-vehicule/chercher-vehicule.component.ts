import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';

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
  constructor(private vehiculeService : VehiculeServiceService) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule : Vehicule) =>
      {
        this.vehicule=vehicule;
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

}
