export class ContratAssurance {
    id_contrat :number ;
    montant_contrat : number ;
    date_deb_contrat : Date ;
    date_fin_contrat : Date ;
    num_police : string ;

    constructor (id_contrat=0,montant_contrat=0,date_deb_contrat,date_fin_contrat,num_police=''){
        this.id_contrat=id_contrat;
        this.montant_contrat=montant_contrat;
        this.date_deb_contrat=date_deb_contrat;
        this.date_fin_contrat=date_fin_contrat ;
        this.num_police=num_police ;

    }

}