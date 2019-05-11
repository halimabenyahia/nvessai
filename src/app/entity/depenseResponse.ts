export class DepenseResponse {
    immatriculation: string;
    dep_janvier: number;
    dep_fevrier: number;
    dep_mars: number;
    dep_avril: number;
    dep_mai: number;
    dep_juin: number;
    dep_juillet: number;
    dep_aout: number;
    dep_septembre: number;
    dep_octobre: number;
    dep_novembre: number;
    dep_decembre: number;
    dep_totale: number;

    constructor(immatriculation='',dep_janvier=0,dep_fevrier=0,dep_mars=0,dep_avril=0,dep_mai=0,dep_juin=0,
                dep_juillet=0,dep_aout=0,dep_septembre=0,dep_octobre=0,dep_novembre=0,dep_decembre=0,dep_totale=0) {
                    this.immatriculation = immatriculation ;
                    this.dep_janvier = dep_janvier ;
                    this.dep_fevrier = dep_fevrier ;
                    this.dep_mars = dep_mars ;
                    this.dep_avril = dep_avril ;
                    this.dep_mai = dep_mai ;
                    this.dep_juin = dep_juin ;
                    this.dep_juillet = dep_juillet ;
                    this.dep_aout = dep_aout ;
                    this.dep_septembre = dep_septembre ;
                    this.dep_octobre = dep_octobre ;
                    this.dep_novembre = dep_novembre ;
                    this.dep_decembre = dep_decembre ;
    }
}