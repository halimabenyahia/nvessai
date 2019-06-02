import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-chercher-assurance',
  templateUrl: './chercher-assurance.component.html',
  styleUrls: ['./chercher-assurance.component.css']
})
export class ChercherAssuranceComponent implements OnInit {

  vehicules : Vehicule ;
  
  constructor(private vehiculeService : VehiculeServiceService ) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe( 
      (value :any)=>
      {this.vehicules=value;
      console.log(this.vehicules)});
  }

}
