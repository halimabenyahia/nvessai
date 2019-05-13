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
 displayy="block" ;
 chart = [];
 month = ['janvier','fevrier','mars','avril','mai','juin',
          'juillet','aout','septembre','octobre','novembre','decembre'];
dep_janvier = [];
  constructor(private vehiculeService :VehiculeServiceService,
              private router : Router ,
              private depenseService : DepenseService,
              private energieService : EnergieService) { }

  ngOnInit() {
    this.depenseService.getSumDepenses().subscribe(
      (value : DepenseResponse []) =>
      {
        this.depenseResponses=value ;
        value.forEach(element => {
          this.dep_janvier.push(element.dep_janvier);
          this.dep_fevrier.push(element.dep_fevrier);
        //  this.dep_janvier.push(element.dep_janvier);
        });
        console.log(this.depenseResponses);
      }
    );

  }
  

 

  showModal() {
    this.show = ! this.show;
    this.displayValue = 'block' ;

       this.chart = new Chart(document.getElementById("canvas"),
             {
              "type":"line",
              "data": {
                "labels": this.month,
                "datasets":[
                  {
                    "label":"Analyse de dépense",
                    "data":this.dep_janvier,
                    "fill":false,
                    "borderColor":"rgb(75, 192, 192)",
                    "lineTension":0.1
                  }
                  ]},
              "options":{}
              });
  }

  closeModalDialog(){
    this.show = ! this.show ;
    this.displayy='none';
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

  goToFiltre(){
    this.router.navigate(['/filtrage/filtre']);
  }

  GoTograh(immatriculation)
  {
    this.router.navigate(['filtrage/graphe',immatriculation]);
  }

 



}
