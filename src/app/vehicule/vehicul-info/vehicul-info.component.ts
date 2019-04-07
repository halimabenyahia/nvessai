import { Component, OnInit } from '@angular/core';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicule } from 'src/app/entity/vehicule';
import { MarqueService } from 'src/app/services/marque.service';
import { ModeleService } from 'src/app/services/modele.service';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { BoiteService } from 'src/app/services/boite.service';
import { EnergieService } from 'src/app/services/energie.service';
import { ContratService } from 'src/app/services/contrat.service';
import { AssuranceService } from 'src/app/services/assurance.service';
import { Marque } from 'src/app/entity/marque';
import { Modele } from 'src/app/entity/modele';
import { Chauffeur } from 'src/app/entity/chauffeur';
import { Boite } from 'src/app/entity/boite';
import { Energie } from 'src/app/entity/energie';
import { ContratAssurance } from 'src/app/entity/contrat';
import { Assurance } from 'src/app/entity/assurance';

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
  contrat: ContratAssurance;
  assurance: Assurance;
  link;
  constructor(private vehicuelService: VehiculeServiceService,
    private router: Router,
    private marqueService: MarqueService,
    private modeleService: ModeleService,
    private chauffeurService: ChauffeurService,
    private boiteService: BoiteService,
    private energieService: EnergieService,
    private contratService: ContratService,
    private assuranceService: AssuranceService,
    private activatedRoute: ActivatedRoute) { }

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

    this.contratService.getContratAss().subscribe(
      (contrat : ContratAssurance) => { this.contrat = contrat; }
    );

  } 

  update(vehicule) {
    this.vehicuelService.editVehicule(vehicule).subscribe(
      (response) => {
        console.log("vehicule modifié");
        // const link='listVehicules';
        this.router.navigate(['Vehicule/listVehicules']);
      }
    );
  }

}
