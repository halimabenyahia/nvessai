import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { DepenseResponse } from 'src/app/entity/depenseResponse';
import { Chart } from 'chart.js';
import { Depense } from 'src/app/entity/depense';

@Component({
  selector: 'app-list-depense-carburant',
  templateUrl: './list-depense-carburant.component.html',
  styleUrls: ['./list-depense-carburant.component.css']
})
export class ListDepenseCarburantComponent implements OnInit {

  depenseResponses : DepenseResponse[] ;
  config : any ;
  depense : Depense  ;
  depenseResponse : DepenseResponse ;
  dep : DepenseResponse  ;
  response : DepenseResponse[] ;
  show = false;
  displayValue = "none" ;
  displayy="block" ;
 chart = [];
 month = ['janvier','fevrier','mars','avril','mai','juin',
          'juillet','aout','septembre','octobre','novembre','decembre'];
editMode = false ;
  
  constructor(private depenseService : DepenseService) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1
     };
  } 


pageChanged(event) {
 this.config.currentPage = event;
}
   

  ngOnInit() {
    this.depenseService.getSumCarburant().subscribe(
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
              "type":"line",
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

}
