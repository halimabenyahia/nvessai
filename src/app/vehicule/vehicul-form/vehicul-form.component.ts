import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service' ;
import { Router } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { Vehicule } from 'src/app/entity/vehicule';
import { Marque } from 'src/app/entity/marque';
import { Modele } from 'src/app/entity/modele';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { Boite } from 'src/app/entity/boite';
import { Energie } from 'src/app/entity/energie';


@Component({
  selector: 'app-vehicul-form',
  templateUrl: './vehicul-form.component.html',
  styleUrls: ['./vehicul-form.component.css']
})
export class VehiculFormComponent implements OnInit {

  vehicule : Vehicule [] ;
  marque :Marque[] ;
  modele : Modele[] ;
  chauffeur : Chauffeur[]=[] ;
  boite : Boite [] ;
  energie : Energie [] ;
  link ;
  
  constructor(private VehiculeService:VehiculeServiceService,
              private router : Router,
              private marqueService : MarqueService,
              private modeleService : ModeleService) { 
  }

  ngOnInit() {  
    this.marqueService.getMarques().subscribe( 
      (value :any[])=>
      {this.marque=value;
      console.log(this.marque)});

    this.modeleService.getModeles().subscribe(
      (value : any[])=>
      {
        this.modele=value ;
      }
    );
     
   
  }
  
  add(formulaire : NgForm){
    this.VehiculeService.addVehicule(formulaire.value).subscribe(
      (response) =>
      {
       // this.VehiculeService.vehicule.push(response);
       // this.form.reset() ;
       const link='listVehicules';
        this.router.navigate(['Vehicule/listVehicules']);
      }
    );
 }


}
