import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-affectation-result',
  templateUrl: './affectation-result.component.html',
  styleUrls: ['./affectation-result.component.css']
})
export class AffectationResultComponent implements OnInit {

  vehicule : Vehicule ;
  constructor(private vehiculeService : VehiculeServiceService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => 
      {
        console.log(param);
        this.vehiculeService.getVehiculeByAffectation(param.des_affectation).subscribe(
          (vehicule: Vehicule) => {
           // console.log(param.carburant);
            this.vehicule = vehicule;
            console.log(vehicule);
          }
        );
      }
    );
  }

}
