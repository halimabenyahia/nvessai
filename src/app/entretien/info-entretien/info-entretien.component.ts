import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/entity/vehicule';
import { TypeEntretien } from 'src/app/entity/typeEntretien';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { TypeEntretienService } from 'src/app/services/type-entretien.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Entretien } from 'src/app/entity/entretien';

@Component({
  selector: 'app-info-entretien',
  templateUrl: './info-entretien.component.html',
  styleUrls: ['./info-entretien.component.css']
})
export class InfoEntretienComponent implements OnInit {

  vehicule: Vehicule;
  vehicules: Vehicule[];
  typeEntretien : TypeEntretien ;
  typeEntretiens : TypeEntretien []=[];
  idSelectedVehicule: number;
  idSelectedTypeEntretien : number ;
  selectedTypeEntretien='';
  selectedVehicule = '';
  entretien : Entretien ;
  constructor(private vehiculeService : VehiculeServiceService,
              private typeEntretienService : TypeEntretienService,
              private entretienService : EntretienService,
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.entretienService.getProgEntretiensById(params.id).subscribe(
          (entretien : Entretien) =>
          {
            this.entretien=entretien ;
            console.log(this.entretien) ;
          }
        );
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

  selectTypeEntretien(selectedTypeEntretien){
    console.log(selectedTypeEntretien);
    this.selectedTypeEntretien = selectedTypeEntretien.des_typeEntretien ;
    this.idSelectedTypeEntretien = selectedTypeEntretien.id_typeEntretien;
    this.typeEntretiens=[];

  }
  chercherType(parametre){
    this.typeEntretienService.getTypeEntretienbyDes(parametre).subscribe(
      (typeE : TypeEntretien []) =>
      {
        this.typeEntretiens = typeE;
      }
    );
  }

  modifier(entretien){
    this.entretienService.edit(entretien).subscribe(
      (response) =>
      {
        console.log("entretien modifié") ;
        this.router.navigate(['/listEntretien']);
      }
    );

  }

}
