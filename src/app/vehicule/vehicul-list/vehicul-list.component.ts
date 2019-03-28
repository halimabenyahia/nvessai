import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service' ;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-vehicul-list',
  templateUrl: './vehicul-list.component.html',
  styleUrls: ['./vehicul-list.component.css']
})
export class VehiculListComponent implements OnInit {

  vehicules : any[];
  text: any;
  

  constructor( private VehiculeService:VehiculeServiceService,
               private httpClient: HttpClient ) { }

  ngOnInit() {
    this.VehiculeService.getAllVehicule().subscribe( 
      (value :any[])=>
      {this.vehicules=value;
      console.log(this.vehicules)})
      
    //  (response) =>
   // { console.log('response' , response )}, 
   // ); 
  }

    listVehicule(){
      this.VehiculeService.getAllVehicule()
    }

  //edit(id_immatriculation) {
   
    //this.router.navigate(['edit', id_immatriculation]); //{ relativeTo: this.router });
  //}

 // delete(id_immatriculation, index) {
   // this.VehiculeServiceService.deleteVehicule(id_immatriculation)
    //  .subscribe(value => {
     //   console.log('Véhicule supprimé !');
       // this.VehiculeServiceService.vehicules.splice(index, 1);
       // this.router.navigate(['players']);
     // });
  //}

}
