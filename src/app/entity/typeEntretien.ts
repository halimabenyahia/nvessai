export class TypeEntretien {
	id_typeEntretien : number ;
	des_typeEntretien : string ;

	constructor(id_typeEntretien=0,des_typeEntretien=''){
		this.id_typeEntretien = id_typeEntretien ;
		this.des_typeEntretien = des_typeEntretien ;
	}
}