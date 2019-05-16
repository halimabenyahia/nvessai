import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { Vehicule } from '../entity/vehicule';
import { EnergieService } from '../services/energie.service';
import { Energie } from '../entity/energie';
import { Router } from '@angular/router';
import { DepenseService } from '../services/depense.service';
import { Depense } from '../entity/depense';
import { DepenseResponse } from '../entity/depenseResponse';
import { Chart } from 'chart.js';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filtrage',
  templateUrl: './filtrage.component.html',
  styleUrls: ['./filtrage.component.css']
})
export class FiltrageComponent implements OnInit {

  vehicule : Vehicule ;
  vehicules : Vehicule[];
  idSelectedVehicule : number ;
  selectedVehicule='';
  selectedEnergie=''
  energies : Energie ;
  idSelectedEnergie :number ;
  energieV : Energie[];
  depense : Depense  ;
  show = false;
  displayValue = "none" ;
 depenseResponse : DepenseResponse ;
 depenseResponses : DepenseResponse [] ;
 dep : DepenseResponse [] ;
 displayy="block" ;
 chart = [];
 month = ['janvier','fevrier','mars','avril','mai','juin',
          'juillet','aout','septembre','octobre','novembre','decembre'];
  constructor(private vehiculeService :VehiculeServiceService,
              private router : Router ,
              private depenseService : DepenseService,
              private energieService : EnergieService) { }

         //     depenseResponse
  ngOnInit() {
    this.depenseService.getSumDepenses().subscribe(
      (value : DepenseResponse []) =>
      {
        this.depenseResponses=value ;
        console.log(this.depenseResponses);

      }
    );

  } 

  showModal(depense,i) {
    var mounthArray = []
    for (let index = 0; index < 12; index++) {
      var test = depense["dep_"+this.month[index]]
      mounthArray.push(test)
    }
    this.show = true;
    this.displayValue = 'block' ;
       this.chart = new Chart(document.getElementById("canvas"),
             {
              "type":"bar",
              "data": {
                "labels": this.month,
                "datasets":[
                  {
                    "label":" vehicule : "+depense.immatriculation,
                    "data":mounthArray, //les sommes ttc
                    "fill":false,
                    "backgroundColor" : "#1E41F9",
                    "borderColor":"rgb(44, 100, 185)",
                    "lineTension":0.1
                  }
                  ]},
              "options":{}
              });
  }

  closeModalDialog(){
    this.show = false ;
    this.displayValue='none';
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

  chercherEnergie(parametre){
    this.energieService.getEnergieParam(parametre).subscribe(
      (energie : Energie[])=>
      {
        this.energieV=energie;
      }
    );
  }
  selectEnergie(selectedEnergie){
    console.log(selectedEnergie);
    this.selectedEnergie = selectedEnergie.des_energie ;
    this.idSelectedEnergie = selectedEnergie.id_energie;
    this.energieV= [];
  }


  chercher(form : NgForm){
    this.depenseService.getSumDepenceByImm(form.value).subscribe(
      (value : DepenseResponse []) =>
      {
        this.dep=value ;
        console.log(this.dep);
      }
    );
  }

 



}
