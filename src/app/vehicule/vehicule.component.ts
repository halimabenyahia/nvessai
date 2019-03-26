import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  constructor( private vehiculeService : VehiculeServiceService) { }

  ngOnInit() {
  }
  
  list(){
    this.vehiculeService.getAllVehicule()
  }

}
