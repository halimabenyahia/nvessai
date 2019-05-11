import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';

@Component({
  selector: 'app-form-depense',
  templateUrl: './form-depense.component.html',
  styleUrls: ['./form-depense.component.css']
})
export class FormDepenseComponent implements OnInit {

  nameRegex = '[a-zA-Z ]+';
  vehicule : Vehicule ;
  vehicules : Vehicule[];
  idSelectedVehicule : number ;
  selectedVehicule='';
  constructor(private depenseService : DepenseService,
              private router : Router,
              private vehiculeService : VehiculeServiceService) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule : Vehicule) =>
      {
        this.vehicule=vehicule;
      }
    );
  }

  add(formulaire : NgForm){
    this.depenseService.addDepense(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['depenses/listDepense']);
      },
      (error) =>
      {
        console.log("probleme de connexion au serveur");
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
