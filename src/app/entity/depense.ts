export class Depense {
    id_depense : number ;
    date_depense : Date ;
    montant_ht : number ;
    tva : number ;
    ttc : number ;
    date_caisse : Date ;
    reference_d : string ;
    compteur_d : string ;

    constructor(id_depense=0,date_depense,montant_ht=0,tva=0,ttc=0,date_caisse,reference_d='',compteur_d='') {
        this.id_depense = id_depense ;
        this.date_depense = date_depense ;
        this.montant_ht = montant_ht ;
        this.tva = tva ;
        this.ttc = ttc ;
        this.date_caisse = date_caisse ;
        this.reference_d = reference_d ;
        this.compteur_d = compteur_d ;

    }
}