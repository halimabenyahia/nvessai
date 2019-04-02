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
  chauffeur : Chauffeur[] ;
  boite : Boite [] ;
  energie : Energie [] ;
  
  form: FormGroup = new FormGroup({});

  constructor(private VehiculeService:VehiculeServiceService,
              private router : Router,
              private marqueService : MarqueService,
              private modeleService : ModeleService) { 

    
  }

  ngOnInit() {

    this.form = new FormGroup({
      'id_immatriculation': new FormControl(null, Validators.required),
      'marque_v': new FormControl(null, Validators.required),
      'modele_v': new FormControl(null, Validators.required),
      'date_m_c': new FormControl(null, Validators.required),
      'num_moteur': new FormControl(null, Validators.required),
      'date_acq': new FormControl(null, Validators.required),
      'cout_achat': new FormControl(null, Validators.required),
      'chauffeur': new FormControl(null, Validators.required),
      'compteur_v': new FormControl(null, Validators.required),
      'type_boite': new FormControl(null, Validators.required),
      'des_energie': new FormControl(null, Validators.required),
      'compagnie_ass': new FormControl(null, Validators.required),
      'num_police': new FormControl(null, Validators.required),
      'date_deb_contrat': new FormControl(null, Validators.required),
      'date_fin_contrat': new FormControl(null, Validators.required),
      'montant_contrat': new FormControl(null, Validators.required),
      'date_visit_tech_deb': new FormControl(null, Validators.required),
      'date_visit_tech_fin': new FormControl(null, Validators.required),
      'date_deb_taxe': new FormControl(null, Validators.required),
      'date_fin_taxe': new FormControl(null, Validators.required),
      'montant_visit_tech': new FormControl(null, Validators.required),
      'date_deb_vig': new FormControl(null, Validators.required),
      'date_fin_vig': new FormControl(null, Validators.required),
      'montant_vig': new FormControl(null, Validators.required)
    })
  }
  add(formulaire : NgForm){
    this.VehiculeService.addVehicule(formulaire.value).subscribe(
      (response) =>
      {
       // this.VehiculeService.vehicule.push(response);
       // this.form.reset() ;
        this.router.navigate(['listVehicules']);
      }
    );
 }


}
