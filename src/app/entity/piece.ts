import { TypePiece } from './typePiece';
import Big from 'big.js';


export class Piece {
    id_piece : number ;
	reference_piece  : string;
	des_piece : string ;
	tva_p : number;
	prix_achat : number ; //pu
	type_piece_p : TypePiece ;
	id_typePiece : number ;

	constructor(id_piece=0,reference_piece='',des_piece='',tva_p=0,prix_achat=0,
	            id_typePiece=0){
		this.id_piece = id_piece ;
		this.reference_piece = reference_piece ;
		this.des_piece = des_piece ;
		this.tva_p = tva_p ;
		this.prix_achat = prix_achat ;
		this.id_typePiece = id_typePiece ;
		
	}
}