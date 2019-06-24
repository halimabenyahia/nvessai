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
  config : any ;
  constructor(private vehiculeService : VehiculeServiceService,
              private activatedRoute : ActivatedRoute) {
                 this.config = {
         itemsPerPage: 4,
         currentPage: 1
        };
               }

               pageChanged(event) {
    this.config.currentPage = event;
  }

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
