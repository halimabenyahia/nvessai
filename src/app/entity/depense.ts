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
    typedepense : TypeDepense ;
    description_depense : string ;
    
    total_ttc : number ;
    total_ht : number ;

    montant_carburant : number ;

    constructor(id_depense=0,date_depense,reference_d='',compteur_d='',
               id_vehicule=0,description_depense='',total_ttc=0,total_ht=0,montant_carburant=0) {
        this.id_depense = id_depense ;
        this.date_depense = date_depense ;
        this.reference_d = reference_d ;
        this.compteur_d = compteur_d ;
        this.id_vehicule = id_vehicule ;
        this.description_depense = description_depense ;
        this.total_ttc = total_ttc ;
        this.total_ht = total_ht ;
        this.montant_carburant = montant_carburant ;
    }
}