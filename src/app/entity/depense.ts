import { Piece } from './piece';
import { Vehicule } from './vehicule';
import { TypeDepense } from './typeDepense';

export class Depense {
    id_depense : number ;
    date_depense : Date ;
    reference_d : string ;
    compteur_d : string ;
    id_vehicule : number ;
    id_typeDepense : number ;
    id_piece : number ;
    pieces : Piece ;
    vehicule_dep : Vehicule ;
    type_depense : TypeDepense ;
    description_depense : string ;

    constructor(id_depense=0,date_depense,montant_ht=0,tva=0,ttc=0,date_caisse,reference_d='',compteur_d='',
               id_vehicule=0,description_depense='') {
        this.id_depense = id_depense ;
        this.date_depense = date_depense ;
        this.reference_d = reference_d ;
        this.compteur_d = compteur_d ;
        this.id_vehicule = id_vehicule ;
        this.description_depense = description_depense ;
    }
}