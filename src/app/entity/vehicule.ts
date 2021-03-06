import { TypeVehicule } from './typeVehicule';
import { Boite } from './boite';
import { Energie } from './energie';
import { Affectation } from './affectation';
import { Chauffeur } from './chauffeur';
import { Assurance } from './assurance';
import { Marque } from './marque';
import { Modele } from './modele';


export class Vehicule {
    id_vehicule:number ;
    immatriculation : string ;
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
    date_deb_contrat : Date ;
    date_fin_contrat : Date ;
    montant_contratAss : number ;
    montant_visit_tech : number ;
    type_vehicule : TypeVehicule ;
    type_boite : Boite ;
    energie_v : Energie ;
    affectation_vehicule : Affectation ;
    id_marque : number ;
    chauffeur_v : Chauffeur ;
    id_chauffeur: number;
    id_modele : number ;
   
   id_typeBoite : number ;
   id_energie : number ;
   id_assurance : number ;
   id_typeVehicule : number ;
   id_affectation : number ;
   id_depense : number ;
   assurance_vehicule : Assurance ;
   marque_v : Marque ;
   modele_vehicule : Modele ;

    constructor (id_vehicule=0,immatriculation='' , date_m_c,date_acq , cout_achat=0,compteur=0,num_moteur='',num_fab='',date_deb_taxe,
    date_fin_taxe,montant_taxe=0,date_deb_vig,date_fin_vig,montant_vig=0,date_deb_visit_tech,date_fin_visit_tech,date_deb_contrat ,
    date_fin_contrat , montant_contratAss=0,montant_visit_tech=0,id_marque=0,id_chauffeur=0 ,
    id_modele=0 ,id_typeBoite=0,id_energie=0,id_assurance=0 , id_typeVehicule=0 , id_affectation=0 , id_depense=0 ){

        this.id_vehicule=id_vehicule;
        this.immatriculation=immatriculation;
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
        this.date_deb_contrat = date_deb_contrat ;
        this.date_fin_contrat = date_fin_contrat ;
        this.montant_contratAss = montant_contratAss ;
        this.montant_visit_tech = montant_visit_tech;
        this.id_chauffeur=id_chauffeur;
        this.id_marque=id_marque;
        this.id_modele=id_modele ;
        this.id_typeBoite=id_typeBoite ;
        this.id_energie=id_energie ;
        this.id_assurance=id_assurance ;
        this.id_typeVehicule=id_typeVehicule ;
        this.id_affectation=id_affectation ;
        this.id_depense=id_depense ;
    }
}