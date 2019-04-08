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

  vehicule : Vehicule  ;
  marque :Marque ;
  modele : Modele ;
  chauffeur : Chauffeur ;
  boites : Boite  ;
  energies : Energie ;
  contrat : ContratAssurance;
  assurance : Assurance;
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
      (marque : Marque)=>
      {this.marque=marque;
      console.log(this.marque)});

    this.modeleService.getModeles().subscribe(
      (modele : Modele)=>
      {
        this.modele=modele ;
      }
    );

    this.chauffeurService.getAllChauffeur().subscribe(
      (chauffeur : Chauffeur)=>
      {this.chauffeur=chauffeur;}
    );

    this.boiteService.getTypeBoite().subscribe(
      (boite : Boite)=>
      {this.boites=boite;}
    );

    this.energieService.getEnergie().subscribe(
      (energie : Energie)=>
      {this.energies=energie;}
    );

    this.contratService.getContratAss().subscribe(
      (contrat : ContratAssurance)=>
      {this.contrat=contrat;}
    );

    this.assuranceService.getAssurrance().subscribe(
      (assurance : Assurance)=>
      {this.assurance=assurance;}
    );
     
    
  }
  
  add(formulaire : NgForm){
   
    let Vehicule=formulaire.value;
   // console.log(Vehicule) ;
   // Vehicule.chauffeur_v=+Vehicule.chauffeur_v;
   console.log('afficher') ;
    console.log(Vehicule) ;
    this.VehiculeService.addVehicule(formulaire.value).subscribe(
      (response) =>
      {
       // console.log(response);
      // const link='listVehicules';
      this.router.navigate(['Vehicule/listVehicules']);
      },
      (error)=> {
         console.log(error);
      }
    );
 }


}
