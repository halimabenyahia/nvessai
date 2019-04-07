import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service' ;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vehicule } from 'src/app/entity/vehicule';



@Component({
  selector: 'app-vehicul-list',
  templateUrl: './vehicul-list.component.html',
  styleUrls: ['./vehicul-list.component.css']
})
export class VehiculListComponent implements OnInit {

  vehicules : Vehicule[] ;
  link ;

  constructor( private VehiculeService:VehiculeServiceService,
               private router : Router
                ) { }

  ngOnInit() {
    this.VehiculeService.getAllVehicule().subscribe( 
      (value :any)=>
      {this.vehicules=value;
      console.log(this.vehicules)});
  }

  

  delete(id_immatriculation, index) {
    this.VehiculeService.deleteVehicule(id_immatriculation)
     .subscribe(value => {
        console.log('Véhicule supprimé !');
      //  this.VehiculeService.vehicule.splice(index, 1);
        this.router.navigate(['Vehicule/listVehicules']);
      });
  }
 
  edit(id_immatriculation){
    const link='Vehicule/editVehicule/id_immatriculation';
    this.router.navigate(['Vehicule/editVehicule/',id_immatriculation]);
  }

}
