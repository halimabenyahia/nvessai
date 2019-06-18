import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { DepenseResponse } from 'src/app/entity/depenseResponse';
import { Vehicule } from 'src/app/entity/vehicule';
import { Depense } from 'src/app/entity/depense';
import { Router } from '@angular/router';
import { Depense_piece } from 'src/app/entity/depense_piece';
import { DepensePieceService } from 'src/app/services/depense-piece.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashbord-depense',
  templateUrl: './dashbord-depense.component.html',
  styleUrls: ['./dashbord-depense.component.css']
})
export class DashbordDepenseComponent implements OnInit {

  depenseResponses : DepenseResponse[] ;
  vehicules : Vehicule [] ;
  selectedVehicule ='' ;
  idSelectedVehicule : number ;
  config : any ;
  depense : Depense  ;
  depenseResponse : DepenseResponse ;
  depenseResponsess : DepenseResponse [] ;
  dep : DepenseResponse  ;
  response : DepenseResponse[] ;
  show = false;
  displayValue = "none" ;
  displayy="block" ;
 chart = [];
 chart2 = [] ;
 month = ['janvier','fevrier','mars','avril','mai','juin',
          'juillet','aout','septembre','octobre','novembre','decembre'];
editMode = false ;

//config : any ;
  depensePieces : Depense_piece[] ;
  depenses : Depense [] ;


  constructor(private depenseService : DepenseService,
              private vehiculeService : VehiculeServiceService,
              private router : Router,
              private depensePieceService : DepensePieceService) { 
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

       this.depenseService.getSumPiecess().subscribe(
        (value : DepenseResponse []) =>
        {
          this.depenseResponsess=value ;
          console.log(this.depenseResponses);
  
        }
      );

       this.depensePieceService.getDepensePieceList().subscribe(
        (value : any[]) =>
        {
          this.depensePieces = value ;
        }
      );
  
      this.depenseService.getDepenses().subscribe(
        (value : any[]) =>
        {
          this.depenses = value ;
        }
      );
   
      /* this.depenseService.getSumDepenceCarburantByImm().subscribe(
   
       );*/
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
   
   
   
     chercherVehicule(parametre) {
       this.vehiculeService.getbyImmatricle(parametre).subscribe(
         (vehicule: Vehicule[]) => {
           this.vehicules = vehicule;
         }
       );
     }
     selectVehicule(selectedVehicule) {
       console.log(selectedVehicule);
       console.log(selectedVehicule.immatriculation);
       this.selectedVehicule = selectedVehicule.immatriculation;
       this.idSelectedVehicule = selectedVehicule.id_vehicule;
       this.vehicules = [];
     }
   
   
     chercher(inputImmatricul){
       console.log("inputImmatricul"+inputImmatricul);
       this.depenseService.getSumDepenceCarburantByImm(inputImmatricul.value).subscribe(
         (value : DepenseResponse[] ) =>
         { 
          console.log("chercher"); 
        //  this.depenseResponses=value ;
        //  console.log(this.depenseResponses);
        // console.log(this.depenseResponses[0].immatriculation);
         //  var k= this.dep.immatriculation;
         //  console.log(k);
       
         } 
       );
     }


     gotoAdd(){
       this.router.navigate(['depenses']);
     }


     delete(id_depense_piece,index){
      this.depensePieceService.supprimer(id_depense_piece).subscribe(
        (response) =>
        {
          console.log("depense piece supprimée");
          //this.router.navigate(['/depenses']);
        }
      );
  
    }
  
    gotoInfo(id_depense_piece){
      this.router.navigate([]);
    }


    

}
