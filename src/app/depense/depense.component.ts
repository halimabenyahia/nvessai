import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../entity/vehicule';
import { TypeDepense } from '../entity/typeDepense';
import { TypePiece } from '../entity/typePiece';
import { Depense } from '../entity/depense';
import { Piece } from '../entity/piece';
import { DepenseService } from '../services/depense.service';
import { Router } from '@angular/router';
import { VehiculeServiceService } from '../services/vehicule-service.service';
import { TypeDepenseService } from '../services/type-depense.service';
import { TypePieceService } from '../services/type-piece.service';
import { NgForm } from '@angular/forms';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {

  nameRegex = '[a-zA-Z ]+';
  vehicule: Vehicule;
  vehicules: Vehicule[];
  idSelectedVehicule: number;
  selectedVehicule = '';
  typeDepense: TypeDepense;
  selectedTypeDepense = '';
  idSelectedTypeDepense: number;
  typeDep: TypeDepense[];
  type: TypeDepense;
  selectedTypePiece = '';
  idSelectedtypePiece: number;
  typePiece: TypePiece;
  typeP: TypePiece[];
  depense: Depense;
  piece: Piece;
  isSelectedPiece = false;
  pieces: Piece[];
  selectedPiece = '';
  idSelectedPiece: number;
  typeDepenses: TypeDepense[];
  ref : string ;
  ty : string ;
  listPieces : Piece[];
  pu : number ;
  tv : number ;
  q : number ;
  myTable =[];
  
 
  constructor(private depenseService: DepenseService,
    private router: Router,
    private vehiculeService: VehiculeServiceService,
    private typeDepenseService: TypeDepenseService,
    private typePieceService: TypePieceService,
    private pieceService: PieceService) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule: Vehicule) => {
        console.log(vehicule);
        this.vehicule = vehicule;
      }
    );

    this.typeDepenseService.getAllTypeDepense().subscribe(
      (typeDepense: TypeDepense) => {
        this.typeDepense = typeDepense;
      }
    );

    this.typePieceService.getAllTypePiece().subscribe(
      (typePiece: TypePiece) => {
        this.typePiece = typePiece
      }
    );
  }

  add(formulaire: NgForm) {
    this.depenseService.addDepense(formulaire.value).subscribe(
      (response) => {
        this.router.navigate(['/listDepense']);
      },
      (error) => {
        console.log("probleme de connexion au serveur");
      }
    );
  }

  chercherVehicule(parametre) {
    this.vehiculeService.getbyImmatricle(parametre).subscribe(
      (vehicule: Vehicule[]) => {
        this.vehicules = vehicule;
      }
    );
  }
  selectVehicule(selectedVehicule) {
    console.log(selectedVehicule);
    this.selectedVehicule = selectedVehicule.immatriculation;
    this.idSelectedVehicule = selectedVehicule.id_vehicule;
    this.vehicules = [];
  }

  chercherTypeDepense(parametre) {
    this.typeDepenseService.getTypedepenseParam(parametre).subscribe(
      (typeDepense: TypeDepense[]) => {
        this.typeDep = typeDepense;
      }
    );
  }
  selectTypeDepense(selectedTypeDepense) {
    console.log(selectedTypeDepense);
    this.selectedTypeDepense = selectedTypeDepense.designation_typeDep;
    this.idSelectedTypeDepense = selectedTypeDepense.id_typeDepense;
    this.typeDep = [];
    if (selectedTypeDepense.value = 'piece') {
      this.isSelectedPiece = true;
    }
    else {
      this.isSelectedPiece = false;
    }
    this.listPieces = [
      new Piece(),
      new Piece(),
      new Piece(),
      new Piece()
    ];

  }

 /* affiche(designationP) {
    console.log(designationP);
    this.pieceService.getbyDespiece(designationP.value).subscribe(
      (piece: Piece) => {
        this.piece = piece;
        console.log(piece);
      }
    );
  }*/

  chercherPiece(parametre) {
    this.pieceService.getbyDespiece(parametre).subscribe(
      (piece: Piece[]) => {
        this.pieces = piece;
        console.log(piece);
      }
    );
  }

  selectPiece(selectedPiece , piece :Piece) {
    console.log(selectedPiece);
    this.selectedPiece = selectedPiece.des_piece;
    this.idSelectedPiece = selectedPiece.id_piece;
    this.pieces = [];

  //  this.listPieces=[];
  //  for (let i = 0; i < this.listPieces.length; i++){
  //    this.listPieces[i]= selectedPiece ;
   //   this.listPieces.push(selectedPiece[i]);
    //  this.listPieces.find(selectedPiece[i]);
   // }


   
    const index = this.listPieces.indexOf(piece);
    console.log("index : " + index);
    this.listPieces.push(this.listPieces[index]);
    
    this.ref =selectedPiece.reference_piece;
    this.ty = selectedPiece.type_piece_p.des_typePiece;
    this.pu=selectedPiece.prix_achat;
    this.tv=selectedPiece.tva_p;
    this.q=selectedPiece.qtep;

    this.myTable.push(this.ref);
    this.myTable.push(this.ty);
    this.myTable.push(this.pu);
    this.myTable.push(this.tv);
    this.myTable.push(this.q);

    
    
  }

  calculResult(qtep){
    var result=0 ;
    result=((this.pu * this.q) + this.tv) / 100 ;
    console.log("resultat ttc " + result);

  }

  ajouterLigne() {
    this.listPieces.push(
      new Piece()
    ) ;
  }

  supprimerLigne(p : Piece){
    console.log("p : "+p );
    const index = this.listPieces.indexOf(p);
    this.listPieces.splice(index, 1);
    console.log("indice " +index );
  }


}
