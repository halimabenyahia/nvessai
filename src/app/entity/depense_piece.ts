export class Depense_piece {
	id_depense : number ;
	id_piece : number ;
	prix_u : number ;
	tva : number ;
	ttc : number ;
	qte : number ;

	constructor(id_depense=0,id_piece=0,prix_u=0,tva=0,ttc=0,qte){
		this.id_depense = id_depense ;
		this.id_piece = id_piece ;
		this.prix_u = prix_u ;
		this.tva = tva ;
		this.ttc = ttc ;
		this.qte = qte ;
	}
}