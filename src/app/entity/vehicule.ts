import { TypeVehicule } from './typeVehicule';
import { Boite } from './boite';
import { Energie } from './energie';
import { Affectation } from './affectation';
import { ContratAssurance } from './contrat';
import { Marque } from './marque';
import { Chauffeur } from './chauffeur';
import { Modele } from './modele';

export class Vehicule {
    id_immatriculation : string ;
    date_m_c : Date ;
    date_acq : Date ;
    cout_achat : number ;
    compteur : number ;
    num_moteur : string ;
    num_fab : string ;
    date_deb_taxe : Date ;
    date_fin_taxe : Date ;
    montant_taxe : number ;
    date_deb_vig : Date ;
    date_fin_vig : Date ;
    montant_vig : number ;
    date_deb_visit_tech : Date ;
    date_fin_visit_tech :Date ;
    montant_visit_tech : number ;
    type_vehicule : TypeVehicule ;
    type_boite : Boite ;
    energie_v : Energie ;
    affectation_vehicule : Affectation ;
    contrat_assurance : ContratAssurance ;
    id_marque : number ;
    //chauffeur_v : Chauffeur ;
    id_chauffeur: number;
  
    modele : number ;

    constructor (id_immatriculation='' , date_m_c,date_acq , cout_achat=0,compteur=0,num_moteur='',num_fab='',date_deb_taxe,
    date_fin_taxe,montant_taxe=0,date_deb_vig,date_fin_vig,montant_vig=0,date_deb_visit_tech,date_fin_visit_tech,
    montant_visit_tech=0,type_vehicule=TypeVehicule,type_boite=Boite,energie_v=Energie,affectation_vehicule=Affectation,
    contrat_assurance=ContratAssurance,id_marque=0,id_chauffeur=0 ,modele=1){

        this.id_immatriculation=id_immatriculation ;
        this.date_m_c=date_m_c ;
        this.date_acq=date_acq;
        this.cout_achat=cout_achat ;
        this.compteur = compteur;
		this.num_moteur = num_moteur;
		this.num_fab = num_fab;
		this.date_deb_taxe = date_deb_taxe;
		this.date_fin_taxe = date_fin_taxe;
		this.montant_taxe = montant_taxe;
		this.date_deb_vig = date_deb_vig;
		this.date_fin_vig = date_fin_vig;
		this.montant_vig = montant_vig;
		this.date_deb_visit_tech = date_deb_visit_tech;
		this.date_fin_visit_tech = date_fin_visit_tech;
        this.montant_visit_tech = montant_visit_tech;
        this.id_chauffeur=id_chauffeur;
        this.id_marque=id_marque;
        



    }
}