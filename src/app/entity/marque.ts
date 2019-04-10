export class Marque {
    id_marque: number ;
    des_marque : string ;
    id_modele : number ;

    constructor(id_marque=0,des_marque='',id_modele=0){
        this.id_marque=id_marque ;
        this.des_marque=des_marque;
        this.id_modele=id_modele;

    }
}