import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service' ;
import { Router } from '@angular/router';
import { BoiteService } from 'src/app/services/boite.service';
import { EnergieService } from 'src/app/services/energie.service';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { ModeleService } from 'src/app/services/modele.service';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-vehicul-form',
  templateUrl: './vehicul-form.component.html',
  styleUrls: ['./vehicul-form.component.css']
})
export class VehiculFormComponent implements OnInit {

  vehicules : any[];
  energies : any[];
  boites : any[] ;
  chauffeurs : any[];
  assurances : any[];
  modeles : any[];
  
  marques : any[];

  form: FormGroup = new FormGroup({});

  constructor(private VehiculeService:VehiculeServiceService,
              private boiteService : BoiteService,
              private energieService : EnergieService,
              private chauffeurService : ChauffeurService,
              private assuranceService : AssuranceService,
              private modeleService : ModeleService,
              private marqueService : MarqueService) { 

    
  }

  ngOnInit() {

    this.form = new FormGroup({
      'id_immatriculation': new FormControl(null, [Validators.required , Validators.pattern('^[0-9]+tT-uU[0-9]'), Validators.max(9)]),
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
 // add(){
  //  this.VehiculeService.addVehicule() ;
 // }




  
 // add() {
   // this.VehiculeServiceService.addVehicule(this.form.value)
     // .subscribe(response => {
      //  this.VehiculeServiceService.vehicule.push(response.body);
       // this.form.reset();
       // this.router.navigate(['Vehicule/addVehicule']);
     // });
  //}

}
