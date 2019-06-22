import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Depense } from 'src/app/entity/depense';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-info-depense',
  templateUrl: './info-depense.component.html',
  styleUrls: ['./info-depense.component.css']
})
export class InfoDepenseComponent implements OnInit {

  depense : Depense ;
  vehicules : Vehicule[] ;
  idSelectedVehicule : number ;
  selectedVehicule='';

  constructor(private depenseService : DepenseService,
              private router : Router,
              private activatedRoute : ActivatedRoute,
              private vehiculeService : VehiculeServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.depenseService.getDepensesById(params.id).subscribe(
          (depense : Depense) =>
          {
            this.depense=depense ;
            console.log(depense) ;
          }

        );
      }
    );
  }

  update(depense){
   this.depenseService.edit(depense).subscribe(
      (response) =>
      {
        console.log("depense modifié");
        this.router.navigate(['listeCarburant']);
      }

    );
  }

  chercherVehicule(parametre) {
    this.vehiculeService.getbyImmatricle(parametre).subscribe(
      (vehicule: Vehicule[]) => {
        this.vehicules = vehicule;
      }
    );
  }
  selectVehicule(selectedVehicule) {
    console.log(selectedVehicule);
    this.selectedVehicule = selectedVehicule.immatriculation;
    this.idSelectedVehicule = selectedVehicule.id_vehicule;
    this.vehicules = [];
  }

}
