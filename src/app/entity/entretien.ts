import { TypeEntretien } from './typeEntretien';
import { Vehicule } from './vehicule';

export class Entretien {
	id_programme : number ;
	date_prev_ent : Date ;
	date_execution : Date ;
	type_entretien : TypeEntretien ;
	id_typeEntretien : number ;
	id_vehicule : number ;
	vehicule_entretien : Vehicule ;
	montant_entretien : number ;


	constructor(id_programme=0,date_prev_ent,date_execution,type_entretien,id_typeEntretien=0,id_vehicule=0,vehicule_entretien,montant_entretien=0) {
		this.id_programme = id_programme ;
		this.date_prev_ent = date_prev_ent ;
		this.date_execution = date_execution ;
		this.type_entretien = type_entretien ;
		this.id_typeEntretien = id_typeEntretien ;
		this.id_vehicule = id_vehicule ;
		this.vehicule_entretien = vehicule_entretien ;
		this.montant_entretien = montant_entretien ;
	}
	


}