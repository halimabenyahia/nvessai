export class Chauffeur {
    id_chauffeur: number;
    matricule_ch : string ;
    nom_ch:string;
    prenom_ch:string ;
    adr_chauff:string;
    tel_chauff:string;

    constructor(id_chauffeur = 0, matricule_ch = '', nom_ch = '' , prenom_ch ='' , adr_chauff = '' , tel_chauff = '') {
        this.id_chauffeur= id_chauffeur;
        this.matricule_ch=matricule_ch;
        this.nom_ch=nom_ch;
        this.prenom_ch=prenom_ch ;
        this.adr_chauff =adr_chauff ;
        this.tel_chauff = tel_chauff ;
    }

}