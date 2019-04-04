import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service' ;
import { Router, ActivatedRoute } from '@angular/router';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { Vehicule } from 'src/app/entity/vehicule';
import { Marque } from 'src/app/entity/marque';
import { Modele } from 'src/app/entity/modele';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { Boite } from 'src/app/entity/boite';
import { Energie } from 'src/app/entity/energie';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { BoiteService } from 'src/app/services/boite.service';
import { EnergieService } from 'src/app/services/energie.service';
import { ContratAssurance } from 'src/app/entity/contrat';
import { ContratService } from 'src/app/services/contrat.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Assurance } from 'src/app/entity/assurance';


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
  contrat : ContratAssurance[];
  assurance : Assurance[];
  link ;
  
  constructor(private VehiculeService:VehiculeServiceService,
              private router : Router,
              private marqueService : MarqueService,
              private modeleService : ModeleService,
              private chauffeurService : ChauffeurService,
              private boiteService : BoiteService,
              private energieService : EnergieService,
              private contratService : ContratService,
              private assuranceService : AssuranceService,
              private activatedRoute : ActivatedRoute) { 
  }

  ngOnInit() {  
    this.activatedRoute.params.subscribe(
      (params) =>
      {console.log(params);}
    );
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

    this.chauffeurService.getAllChauffeur().subscribe(
      (value : any[])=>
      {this.chauffeur=value;}
    );

    this.boiteService.getTypeBoite().subscribe(
      (value : any[])=>
      {this.boite=value;}
    );

    this.energieService.getEnergie().subscribe(
      (value : any[])=>
      {this.energie=value;}
    );

    this.contratService.getContratAss().subscribe(
      (value : any[])=>
      {this.contrat=value;}
    );

    this.assuranceService.getAssurrance().subscribe(
      (value : any[])=>
      {this.assurance=value;}
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
