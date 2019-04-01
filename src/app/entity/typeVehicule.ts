export class TypeVehicule {
    id_typeVehicule : number ;
    des_typeVehicule : string ;

    constructor(id_typeVehicule = 0, des_typeVehicule = ''){
        this.id_typeVehicule=id_typeVehicule;
        this.des_typeVehicule=des_typeVehicule ;
    }
}