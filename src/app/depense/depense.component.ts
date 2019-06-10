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
import { Depense_piece } from '../entity/depense_piece';
import { DepensePieceService } from '../services/depense-piece.service';

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
  ty : string ;
  listPieces : Piece [];
 
  q : number ;
  myTable =[];
  ht : number ;
  ttc : number ;
  tva : number ;
  montant_total : number ;
  depensePiece : Depense_piece [];
  tp ='';
  dp ='';
  pu : number ;
  ref='';
  constructor(private depenseService: DepenseService,
              private router: Router,
              private vehiculeService: VehiculeServiceService,
              private typeDepenseService: TypeDepenseService,
              private typePieceService: TypePieceService,
              private pieceService: PieceService,
              private depensePieceService : DepensePieceService) { }

  ngOnInit() {
    this.listPieces = [];
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


  calculResult(formulaire){
    var result=0 ;

    for (let index = 0; index < this.depensePiece.length; index++){
      
      var q=this.depensePiece[index].qte
      console.log("quantité:" + q) ;

    }
      ;
    
  }


  ajouterLigne() {
    this.depensePiece.push(
      //new Depense_piece()
    ) ;
  }

  supprimerLigne(d : Depense_piece){
    console.log("lignee : "+d );
    const index = this.depensePiece.indexOf(d);
    this.depensePiece.splice(index, 1);
    console.log("indice " +index );
  }

  add(formulaire: NgForm) {
    this.depensePieceService.addDepensePiece(formulaire.value).subscribe(
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
    this.depensePiece = [
      new Depense_piece()
      
    ];

  }

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
  }

  selectionner(d,index){
    console.log("indexTab "+index);

    this.depensePiece[index].piece_dep.des_piece=d.piece_dep.des_piece.value;
    console.log("piece " + this.depensePiece[index].piece_dep.des_piece);

    //this.depensePiece[index].piece_dep.type_piece_p.des_typePiece=d.type_piece_p.des_typePiece.value ;
    //this.tp=this.depensePiece[index].piece_dep.type_piece_p.des_typePiece;
    //console.log("type piece "+this.tp)

    //this.depensePiece[index].piece_dep.reference_piece=d.piece_dep.reference_piece.value ;
    //this.ref=this.depensePiece[index].piece_dep.reference_piece=d.piece_dep.reference_piece.value;
    //console.log("reference" + this.ref);
    
    //this.depensePiece[index].piece_dep.prix_achat=d.piece_dep.prix_achat.value;
    //this.pu=this.depensePiece[index].piece_dep.prix_achat;

    //console.log("pu" + this.pu);
    //console.log("piece " + d.piece_dep.des_piece.value);
    //console.log("piece " + d.piece_dep.type_piece_p.des_typePiece.value);
    //console.log("reference " + d.piece_dep.reference_piece);
  }
   

  affiche(piece){
    for (let index = 0; index < this.depensePiece.length; index++){
      this.depensePiece[0].piece_dep.des_piece="abc";
      console.log("element"+ this.depensePiece[index].piece_dep.des_piece ,"index :" +index);
    }
  }
  
  

  gotoList(){
    this.router.navigate(['/listDepense']);
  }


}
