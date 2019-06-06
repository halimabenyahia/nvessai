import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { Vehicule } from '../entity/vehicule';
import { TypeEntretienService } from '../services/type-entretien.service';
import { TypeEntretien } from '../entity/typeEntretien';
import { NgForm } from '@angular/forms';
import { EntretienService } from '../services/entretien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entretien',
  templateUrl: './entretien.component.html',
  styleUrls: ['./entretien.component.css']
})
export class EntretienComponent implements OnInit {

  vehicule: Vehicule;
  vehicules: Vehicule[];
  typeEntretien : TypeEntretien ;
  typeEntretiens : TypeEntretien []=[];
  idSelectedVehicule: number;
  idSelectedTypeEntretien : number ;
  selectedTypeEntretien='';
  selectedVehicule = '';
  
  constructor(private vehiculeService : VehiculeServiceService,
              private typeEntretienService : TypeEntretienService,
              private entretienService : EntretienService,
              private router : Router) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule: Vehicule) => {
        console.log(vehicule);
        this.vehicule = vehicule;
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

  add(formulaire : NgForm){
    this.entretienService.addProgramme(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['listEntretien']);
      }
    );
  }

}
