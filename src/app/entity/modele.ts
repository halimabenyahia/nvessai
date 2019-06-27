import { Marque } from './marque';

export class Modele {
    id_modele : number ;
    des_modele : string ;
    marque_m : Marque ;

    constructor(id_modele=0,des_modele=''){
        this.id_modele=id_modele ;
        this.des_modele=des_modele ;
    }
}