import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { Vehicule } from '../entity/vehicule';
import { Chart } from 'chart.js';
import { ChauffeurService } from '../services/chauffeur.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  chart = [] ;
  nombre  ;
  nbChauff ;
  constructor(private vehiculeService : VehiculeServiceService,
              private chauffeurService : ChauffeurService) { }

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
