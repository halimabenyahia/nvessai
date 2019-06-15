import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { Vehicule } from '../entity/vehicule';
import { Chart } from 'chart.js';
import { ChauffeurService } from '../services/chauffeur.service';
import { EnergieService } from '../services/energie.service';
import { Energie } from '../entity/energie';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  chart = [] ;
  nombre  ;
  nbChauff ;
  nbPartner ;
  nbCamion ;
  nbVoiture ;
  nbEssence  ;
  charts =[] ;
  listEnergie : Energie   ;
  energieTab = ["essence" , "gazoil","gazoil sans soufre","essence sans plomb"];

  constructor(private vehiculeService : VehiculeServiceService,
              private chauffeurService : ChauffeurService,
              private energieService : EnergieService) { }

 role= localStorage.getItem('role');
 
              
  ngOnInit() {
    this.vehiculeService.getNombreVehicule().subscribe(
      (response) =>
      {
        this.nombre = response ;
         //console.log("nombre de véhicule "+this.nombre) ;
      }
    );

    this.chauffeurService.getNombreChauffeur().subscribe(
      (response) =>
      {
        this.nbChauff = response ;
       // console.log("nb chauff" + this.nbChauff);

      }
    );

    this.vehiculeService.getNombreVehiculePartner().subscribe(
      (response) =>
      {
        this.nbPartner=response;
      }
    );

    this.vehiculeService.getNombreVehiculeCamion().subscribe(
      (response) =>
      {
        this.nbCamion=response ;
      }
     );

     this.vehiculeService.getNombreVehiculeVoiture().subscribe(
       (response) =>
       {
         this.nbVoiture=response ;
       }
     );

     this.energieService.getEnergie().subscribe(
       (energie : Energie ) =>
       {
         this.listEnergie=energie ;
       }
     );

     this.vehiculeService.getNombreEss().subscribe(
       (response) =>
       {
         this.nbEssence=response ;
       }
     );


     this.charts = new Chart(document.getElementById("canvas"),
             {
              "type":"doughnut",
              "title":{
                "text":"Chart Title",
               },
              "data": {
                "labels": this.energieTab,
                "datasets":[
                  {
                    "label":" Energie par véhicule ",
                    "data": [5,2,2,1], //les sommes ttc
                    "fill":false,
                    "backgroundColor" : ["#0074D9", "#FF4136", "#E1DE2F", "#16F487", "#7FDBFF"],
                    "borderColor":"#F7FCF9",
                    "lineTension":0.1
                  }
                  ]},
              "options":{
                title: "Energie par véhicule "
              /*  colors:[{
                  //backgroundColor:"#F00",
                  backgroundColor: [
                    'rgba(110, 114, 20, 1)',
                    'rgba(118, 183, 172, 1)',
                    'rgba(0, 148, 97, 1)',
                    'rgba(129, 78, 40, 1)'
                    //'rgba(129, 199, 111, 1)'
                ]
                 // hoverBackgroundColor:"Blue",
                 // borderColor:"#0F0",
                 // hoverBorderColor:"#00F"
            }]*/
              }
              });





    /*
    this.chart = new Chart(document.getElementById("canvas"),
             {
              "type":"doughnut",
              "data": {
                "labels": ['Red','Yellow','Blue'],
                "datasets":[
                  {
                    "label":" vehicule : ",
                    "data": [10, 20, 30], //les sommes ttc
                    "fill":false,
                    "backgroundColor" : "#1E41F9",
                    "borderColor":"rgb(44, 100, 185)",
                    "lineTension":0.1
                  }
                  ]},
              "options":{}
              });*/
              console.log("rolee "+ this.role);
              
  }

  

}
