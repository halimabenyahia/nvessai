export class User {
    id_user : number ;
    login : string ;
    mdp : string ;
    etat_admin : boolean ;
    
    constructor(id_user=0,login='',mdp='',etat_admin :boolean){
        this.id_user=id_user ;
        this.login=login ;
        this.mdp=mdp ;
        this.etat_admin=etat_admin ;
    }
}