import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
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
import { AssuranceService } from 'src/app/services/assurance.service';
import { Assurance } from 'src/app/entity/assurance';
import { TypeVehicule } from 'src/app/entity/typeVehicule';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { Affectation } from 'src/app/entity/affectation';
import { AffectationService } from 'src/app/services/affectation.service';


@Component({
  selector: 'app-vehicul-form',
  templateUrl: './vehicul-form.component.html',
  styleUrls: ['./vehicul-form.component.css']
})
export class VehiculFormComponent implements OnInit {

  vehicule: Vehicule;
  marque: Marque;
  modele: Modele;
  chauffeur: Chauffeur;
  boites: Boite;
  energies: Energie;
  assurance: Assurance;
  typeVehicule: TypeVehicule;
  affectation: Affectation;
  link;
  resultat: Marque[];
  selectedMarque = '';
  selectedModele = '';
  selectedTypeVehicule = '';
  selectedAffectation ='' ;
  selectedChauffeur = '' ;
  selectedBoite = '' ;
  selectedEnergie='';
  selectedassurance='';
  mod : Modele [];
  typev : TypeVehicule[] ;
  affect : Affectation [] ;
  chauff : Chauffeur [] ;
  boiteV : Boite[] ;
  energieV : Energie[];
  assur : Assurance[];

  constructor(private VehiculeService: VehiculeServiceService,
    private router: Router,
    private marqueService: MarqueService,
    private modeleService: ModeleService,
    private chauffeurService: ChauffeurService,
    private boiteService: BoiteService,
    private energieService: EnergieService,
    private assuranceService: AssuranceService,
    private activatedRoute: ActivatedRoute,
    private typeVehiculeService: TypeVehiculeService,
    private affectationService: AffectationService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => { console.log(params); }
    );

    this.marqueService.getMarques().subscribe(
      (marque: Marque) => { this.marque = marque; });

    this.modeleService.getModeles().subscribe(
      (modele: Modele) => {
        this.modele = modele;
      }
    );

    this.chauffeurService.getAllChauffeur().subscribe(
      (chauffeur: Chauffeur) => { this.chauffeur = chauffeur; }
    );

    this.boiteService.getTypeBoite().subscribe(
      (boite: Boite) => { this.boites = boite; }
    );

    this.energieService.getEnergie().subscribe(
      (energie: Energie) => { this.energies = energie; }
    );


    this.assuranceService.getAssurrance().subscribe(
      (assurance: Assurance) => { this.assurance = assurance; }
    );

    this.typeVehiculeService.getTypeVehicule().subscribe(
      (typeVehicule: TypeVehicule) => {
        this.typeVehicule = typeVehicule;
      }
    );

    this.affectationService.getAffectation().subscribe(
      (affectation: Affectation) => {
        this.affectation = affectation;
      }
    );




  }


  add(formulaire: NgForm) {
    let Vehicule = formulaire.value;
    console.log('afficher');
    console.log(Vehicule);
    this.VehiculeService.addVehicule(formulaire.value).subscribe(
      (response) => {
        this.router.navigate(['Vehicule/listVehicules']);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  selectMarque(selectedMarque) {
    console.log(selectedMarque);
    this.selectedMarque = this.selectedMarque;
    this.resultat = [];
  }
  chercherMarque(parametre) {
    console.log(parametre);
    this.marqueService.getMarqueParam(parametre).subscribe(
      (marque: Marque[]) => {
        this.resultat = marque;
      }
    );
  }


  selectModele(selectedModele){
    console.log(selectedModele);
    this.selectedModele = this.selectedModele ;
    this.mod = [];
  }

  chercherModele(parametre){
    this.modeleService.getModeleParam(parametre).subscribe(
      (modele : Modele []) =>
      {
        this.mod = modele ;
      }
    );
  }

  chercherTypeVehicule(parametre){
    this.typeVehiculeService.getTypevehiculeParam(parametre).subscribe(
      (typeV : TypeVehicule[]) =>
      {
        this.typev=typeV ;
      }
    );
  }

  selectTypeV(selectedTypeVehicule){
    this.selectedTypeVehicule = this.selectedTypeVehicule ;
    this.typev = [];
    }


    chercherAffectation(parametre){
      this.typeVehiculeService.getTypevehiculeParam(parametre).subscribe(
        (affectation : Affectation []) =>
        {
          this.affect = affectation ;
        }
      );
    }

    selectAffectation(selectedAffectation){
      this.selectedAffectation = this.selectedAffectation ;
      this.affect = [] ;
    }


    chercherChauffeur(parametre){
      this.chauffeurService.getChauffeurParam(parametre).subscribe(
        (Chauffeur : Chauffeur[]) =>
        {
          this.chauff=Chauffeur ;
        }
      );
    }
    selectChauffeur(selectedChauffeur){
      this.selectedChauffeur =this.selectedChauffeur ;
      this.chauff = [] ;
    }

    chercherBoite(parametre){
      this.boiteService.getBoiteParam(parametre).subscribe(
        (boite : Boite[]) =>
        {
          this.boiteV=boite ;
        }
      );
    }
    selectBoite(selectedBoite){
      this.selectedBoite=this.selectedBoite;
      this.boiteV = [];
    }

    chercherEnergie(parametre){
      this.energieService.getEnergieParam(parametre).subscribe(
        (energie : Energie[])=>
        {
          this.energieV=energie;
        }
      );
    }

    selectEnergie(selectedEnergie){
      this.selectedEnergie=this.selectedEnergie;
      this.energieV= [];
    }

    chercherAssurance(parametre){
      this.assuranceService.getAssuranceParam(parametre).subscribe(
        (assurance : Assurance[]) =>
        {
          this.assur=assurance;
        }
      );
    }
    selectAssurance(selectedassurance){
      this.selectedassurance=this.selectedassurance;
      this.assur=[];
    }



}
