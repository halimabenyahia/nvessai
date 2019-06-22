import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { DepenseResponse } from 'src/app/entity/depenseResponse';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sum-depense-piece',
  templateUrl: './sum-depense-piece.component.html',
  styleUrls: ['./sum-depense-piece.component.css']
})
export class SumDepensePieceComponent implements OnInit {

  depenseResponses : DepenseResponse [] ;
  config : any ;
  show = false;
  displayValue = "none" ;
  displayy="block" ;
 chart = [];
 charts = [] ;
 month = ['janvier','fevrier','mars','avril','mai','juin',
          'juillet','aout','septembre','octobre','novembre','decembre'];
editMode = false ;

tab = [ 'TTC' , 'HT'];


  constructor(private depenseService : DepenseService,
              private router : Router) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1
     };
   }
   pageChanged(event) {
    this.config.currentPage = event;
  }

  ngOnInit() {
    this.depenseService.getSumPiecess().subscribe(
      (value : DepenseResponse []) =>
        {
          this.depenseResponses=value ;
          console.log(this.depenseResponses);
  
        }
    );

 /*   this.charts = new Chart(document.getElementById("canvas"),
    {
     "type":"doughnut",
     "title":{
       "text":"Chart Title",
      },
     "data": {
       "labels": this.tab, // ttc ht
       "datasets":[
         {
           "label":" Energie par véhicule ",
           "data": [5,2], //les sommes ttc
           "fill":false,
           "backgroundColor" : ["#16F487", "#7FDBFF"],
           "borderColor":"#F7FCF9",
           "lineTension":0.1
         }
         ]},
     "options":{
       title: "Energie par véhicule "
       colors:[{
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
   }]
     }
     });*/
  }

  
  showModal(depense,i){
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

  gotoList(){
    this.router.navigate(['listDepensePiece']);
  }




}
