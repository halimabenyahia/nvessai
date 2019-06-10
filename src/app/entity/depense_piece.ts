import { Piece } from './piece';
import { Depense } from './depense';

export class Depense_piece {
	
	id_depense_piece : number ;
	tva_dp : number ;
	hors_taxe : number ;
	ttc_dp : number ;
	qte : number ;
	piece_dep : Piece ;
	depense_dep : Depense ;

	constructor(id_depense_piece=0,tva_dp=0,hors_taxe=0,ttc_dp=0,qte=0,piece_dep,depense_dep){
		this.id_depense_piece = id_depense_piece ;
		this.tva_dp = tva_dp ;
		this.hors_taxe = hors_taxe ;
		this.ttc_dp = ttc_dp ;
		this.qte = qte ;
		this.piece_dep = piece_dep ;
		this.depense_dep = depense_dep ;
	}

}