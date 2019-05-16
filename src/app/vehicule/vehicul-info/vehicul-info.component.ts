import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicule } from 'src/app/entity/vehicule';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { BoiteService } from 'src/app/services/boite.service';
import { EnergieService } from 'src/app/services/energie.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Marque } from 'src/app/entity/marque';
import { Modele } from 'src/app/entity/modele';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { Boite } from 'src/app/entity/boite';
import { Energie } from 'src/app/entity/energie';
import { Assurance } from 'src/app/entity/assurance';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';
import { TypeVehicule } from 'src/app/entity/typeVehicule';
import { AffectationService } from 'src/app/services/affectation.service';
import { Affectation } from 'src/app/entity/affectation';

@Component({
  selector: 'app-vehicul-info',
  templateUrl: './vehicul-info.component.html',
  styleUrls: ['./vehicul-info.component.css']
})

export class VehiculInfoComponent implements OnInit {

  vehicule: Vehicule;
  marque: Marque;
  modele: Modele;
  chauffeur: Chauffeur;
  boite: Boite;
  energie: Energie;
  assurance: Assurance;
  typeV : TypeVehicule ;
  link;
  selectedMarque='';
  idSelectedMArque:number ;
  resultat : Marque [];
  selectedTypeVehicule='';
  typeVehicule : TypeVehicule[];
  idSelectedtypevehicule : number ;
  affect : Affectation[];
  selectedAffectation ='' ;
  idSelectedAffectation : number ;
  chauff : Chauffeur[];
  selectedChauffeur='';
  idSelectedChauffeur : number ;
  boiteV : Boite[];
  selectedBoite='';
  idSelectedBoite :number ;
  energieV : Energie [];
  selectedEnergie='';
  idSelectedEnergie : number ;
  assur : Assurance[];
  selectedassurance='';
  idSelectedAssurance:number;

  constructor(private vehicuelService: VehiculeServiceService,
    private router: Router,
    private marqueService: MarqueService,
    private modeleService: ModeleService,
    private chauffeurService: ChauffeurService,
    private boiteService: BoiteService,
    private energieService: EnergieService,
    private assuranceService: AssuranceService,
    private activatedRoute: ActivatedRoute,
    private typeVehiculeService :TypeVehiculeService,
    private affectationService : AffectationService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);

        this.vehicuelService.getByIdVehicule(params.id).subscribe(
          (vehicule: Vehicule) => {
            this.vehicule = vehicule;
            console.log(vehicule);
          }
        );
      }
    );


    this.marqueService.getMarques().subscribe(
      (marque: Marque) => {
      this.marque = marque;
        console.log(this.marque)
      });

    this.modeleService.getModeles().subscribe(
      (modele : Modele) => {
        this.modele = modele;
      }
    );

    this.chauffeurService.getAllChauffeur().subscribe(
      (chauffeur : Chauffeur) => { this.chauffeur = chauffeur; }
    );

    this.boiteService.getTypeBoite().subscribe(
      (boite : Boite) => { this.boite = boite; }
    );

    this.energieService.getEnergie().subscribe(
      (energie : Energie) => { this.energie = energie; }
    );

  } 

  update(vehicule : Vehicule) {
    this.vehicuelService.editVehicule(vehicule).subscribe(
      (response) => {
        console.log("vehicule modifié");
        // const link='listVehicules';
        this.router.navigate(['Vehicule/listVehicules']);
      }
    );
  }

  selectMarque(selectedMarque) {
    console.log(selectedMarque);
    this.selectedMarque = selectedMarque.des_marque;
    this.idSelectedMArque = selectedMarque.id_marque;
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

  chercherTypeVehicule(parametre){
    this.typeVehiculeService.getTypevehiculeParam(parametre).subscribe(
      (typeV : TypeVehicule []) =>
      {
        this.typeVehicule=typeV ;
      }
    );
  }
  selectTypeV(selectedTypeVehicule){
    console.log(selectedTypeVehicule);
    this.selectedTypeVehicule = selectedTypeVehicule.des_typeVehicule;
    this.idSelectedtypevehicule = selectedTypeVehicule.id_typeVehicule ;
    this.typeVehicule = [];
    }

  chercherAffectation(parametre){
      this.affectationService.getAffectationParam(parametre).subscribe(
        (affectation : Affectation []) =>
        {
          this.affect = affectation ;
        }
      );
    }
    selectAffectation(selectedAffectation){
      console.log(selectedAffectation);
      this.selectedAffectation = selectedAffectation.des_affectation;
      this.idSelectedAffectation = selectedAffectation.id_affectation ;
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
      console.log(selectedChauffeur);
      this.selectedChauffeur = selectedChauffeur.nom_ch;
      this.idSelectedChauffeur = selectedChauffeur.id_chauffeur ;
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
      console.log(selectedBoite);
      this.selectedBoite = selectedBoite.des_boite;
      this.idSelectedBoite= selectedBoite.id_typeBoite ;
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
      console.log(selectedEnergie);
      this.selectedEnergie = selectedEnergie.des_energie ;
      this.idSelectedEnergie = selectedEnergie.id_energie;
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
      console.log(selectedassurance);
      this.selectedassurance = selectedassurance.compagnie_ass ;
      this.idSelectedAssurance = selectedassurance.id_assurance;
      this.assur=[];
    }
}
