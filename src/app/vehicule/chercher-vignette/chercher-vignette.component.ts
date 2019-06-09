import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-chercher-vignette',
  templateUrl: './chercher-vignette.component.html',
  styleUrls: ['./chercher-vignette.component.css']
})
export class ChercherVignetteComponent implements OnInit {

  vehicules : Vehicule ;
  config : any ;
  constructor(private vehiculeService : VehiculeServiceService) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1
     };
   }

   pageChanged(event) {
    this.config.currentPage = event;
  } 

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe( 
      (value :any)=>
      {this.vehicules=value;
      console.log(this.vehicules)});
  }

}
