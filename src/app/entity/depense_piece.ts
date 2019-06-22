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
	depense_dp : Depense ;
	piece_id:number;
	piece_des:string;
	reference :string ;
	prix:number;

	id_piece : number ;
	id_depense : number ;

	

	

	
	constructor(id_depense=0){
		this.id_depense=id_depense;
	}



}