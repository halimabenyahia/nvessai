import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  vehicule: Vehicule;

  constructor(private vehiculeService : VehiculeServiceService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param) => 
      {
        console.log(param);
        this.vehiculeService.getVehiculeByCarburant(param.id).subscribe(
          (vehicule: Vehicule) => {
            this.vehicule = vehicule;
            console.log(vehicule);
          }
        );
      }
    );
  }

}
