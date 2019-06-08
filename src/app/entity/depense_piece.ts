export class Depense_piece {
	id_depense : number ;
	id_piece : number ;
	tva_dp : number ;
	hors_taxe : number ;
	ttc_dp : number ;
	qte : number ;

	constructor(id_depense=0,id_piece=0,tva_dp=0,hors_taxe=0,ttc_dp=0,qte=0){
		this.id_depense = id_depense ;
		this.id_piece = id_piece ;
		this.tva_dp = tva_dp ;
		this.hors_taxe = hors_taxe ;
		this.ttc_dp = ttc_dp ;
		this.qte = qte ;
	}
}