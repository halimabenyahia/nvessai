import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Router } from '@angular/router';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-vehicul-info',
  templateUrl: './vehicul-info.component.html',
  styleUrls: ['./vehicul-info.component.css']
})
export class VehiculInfoComponent implements OnInit {

  vehicule :Vehicule[] =[] ;
  link ;
  constructor(private vehicuelService : VehiculeServiceService,
              private router : Router) { }

  ngOnInit() {
  }
 
  update(vehicule){
    this.vehicuelService.editVehicule(vehicule).subscribe(
      (response) =>
      {
        const link='listVehicules';
        this.router.navigate(this.link);
      }
    );
  }

}
