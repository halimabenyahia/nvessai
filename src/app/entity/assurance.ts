export class Assurance {
    id_assurance: number ;
    compagnie_ass: string ;
    adr_assurance : string ;
    tel_assurance : string ;
    constructor(id_assurance = 0, compagnie_ass = '', adr_assurance='', tel_assurance=''){
        this.id_assurance=id_assurance ;
        this.compagnie_ass=compagnie_ass ;
        this.adr_assurance=adr_assurance ;
        this.tel_assurance=tel_assurance ;

    }
}