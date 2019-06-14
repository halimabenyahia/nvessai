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
import Big from 'big.js';

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
  depenses: Depense;
  piece: Piece;
  isSelectedPiece = false;
  pieces: Piece[];
  selectedPiece = '';
  idSelectedPiece: number;
  typeDepenses: TypeDepense[];
  ty: string;
  listPieces: Piece[];

  q: number;
  myTable = [];
  ht: number;
  ttc: number;
  tva: number;
  montant_total: number;
  depensePiece: Depense_piece[];
  depP: Depense_piece;
  tp = '';
  dp = '';
  pu: number;
  ref = '';
  qt: number;
  tv: number;
  total_ttc = 0;
  total_ht = 0;
  test: number;
  p: number;
  dernierD;
  selectedDepense: number;
  idSelectedDepense: number;
  d1: Depense_piece;

  constructor(private depenseService: DepenseService,
    private router: Router,
    private vehiculeService: VehiculeServiceService,
    private typeDepenseService: TypeDepenseService,
    private typePieceService: TypePieceService,
    private pieceService: PieceService,
    private depensePieceService: DepensePieceService) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule: Vehicule) => {
        console.log(vehicule);
        this.vehicule = vehicule;
      }
    );

    this.depenseService.getDernierDepense().subscribe(
      (response) => {
        this.dernierD = response;
        console.log("indice dernier depense" + this.dernierD);
      }
    );

    this.typeDepenseService.getAllTypeDepense().subscribe(
      (typeDepense: TypeDepense) => {
        this.typeDepense = typeDepense;
      }
    );
  }


  ajouterLigne(index) {
    console.log("indiceee ou ajouterrr" + index);
    this.depensePiece.push(
      new Depense_piece()

    );
    for (let index = 0; index < this.depensePiece.length; index++) {
      this.depensePiece[index].qte = 1;
      this.depensePiece[index].ttc_dp = 0;
      this.depensePiece[index].hors_taxe = 0;
    }
  }

  supprimerLigne(d: Depense_piece) {
    console.log("lignee : " + d);
    const index = this.depensePiece.indexOf(d);
    this.depensePiece.splice(index, 1);
    console.log("indice " + index);
  }

  add(formulaire: NgForm) {
    this.depenseService.addDepense(formulaire.value).subscribe(
      (response) => {

        this.router.navigate(['/listDepensePiece']);
      },
      (error) => {
        console.log("probleme de connexion au serveur");
      }
    );
    this.depensePieceService.addDepensePiece(formulaire.value).subscribe(
      (response) => {
        this.router.navigate(['/listDepensePiece']);
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
    console.log(selectedVehicule.immatriculation);
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
  selectTypeDepense(selectedTypeDepense, index) {
    console.log(selectedTypeDepense);
    console.log(selectedTypeDepense.designation_typeDep);
    //console.log(selectedTypeDepense.type_depense.designation_typeDep);
    this.selectedTypeDepense = selectedTypeDepense.designation_typeDep;
    this.idSelectedTypeDepense = selectedTypeDepense.id_typeDepense;

    this.idSelectedDepense = this.selectedDepense;
    console.log("id depense" + this.idSelectedDepense);
    this.typeDep = [];
    if (selectedTypeDepense.value = 'piece') {
      this.isSelectedPiece = true;
    }
    else {
      this.isSelectedPiece = false;
    }

    this.depensePiece = [

      new Depense_piece(),
      new Depense_piece(),
      new Depense_piece()

    ];

    console.log("this.selectedDepense" + this.selectedDepense);
    for (let index = 0; index < this.depensePiece.length; index++) {

      this.depensePiece[index].qte = 1;
      this.depensePiece[index].ttc_dp = 0;
      this.depensePiece[index].hors_taxe = 0;
      this.depensePiece[index].iddepense = this.dernierD + 1;

    }
   // for (let index = 0; index < this.depensePiece.length; index++) {
    //  console.log(this.depensePiece[index].qte);
    //  console.log(this.depensePiece[index].ttc_dp);
    //  console.log(this.depensePiece[index].hors_taxe);
    //  console.log(this.depensePiece[index].iddepense);

   // }

  }

  chercherPiece(parametre) {
    this.pieceService.getbyDespiece(parametre).subscribe(
      (piece: Piece[]) => {
        this.pieces = piece;
        console.log(piece);
      }
    );
  }

  selectPiece(selectedP, index) {

    //this.test = 5; this.test = this.test / 3;
    //console.log("val test" + this.test);

    this.idSelectedPiece = selectedP.id_piece;
    console.log(selectedP);
    console.log("index@selectPiece" + index);
    console.log("des_piece@selectPiece" + selectedP.des_piece);
    console.log("id_piece@selectPiece" + selectedP.id_piece);

    this.depensePiece[index].piece_des = selectedP.des_piece;
    this.depensePiece[index].piece_id = selectedP.id_piece;

    this.depensePiece[index].tva_dp = selectedP.tva_p;
    this.tv = this.depensePiece[index].tva_dp;
    console.log("tvaaa " + this.tv);


    this.qt = this.depensePiece[index].qte;
    console.log("qtttee" + this.qt);

    this.depensePiece[index].reference = selectedP.reference_piece;


    this.depensePiece[index].prix = selectedP.prix_achat;
    this.pu = this.depensePiece[index].prix;
    console.log("prixxx  puu :" + this.pu);


    this.depensePiece[index].hors_taxe = this.qt * this.pu;
    this.ht = this.depensePiece[index].hors_taxe;
    console.log("ht : " + this.ht);

    this.depensePiece[index].ttc_dp = ((this.ht * (100 + this.tv) / 100));
    console.log("calculee ttcc " + this.depensePiece[index].ttc_dp);
    console.log("ttc_dp" + this.depensePiece[index].ttc_dp);


    this.depensePiece[index].iddepense = this.dernierD + 1;
    //console.log("this.depensePiece[index].iddepense = this.dernierD+1" + this.depensePiece[index].iddepense);
    console.log("indice du nv depense enregistré " + this.depensePiece[index].iddepense);


    this.total_ttc = 0;
    this.total_ht = 0;
    for (let index = 0; index < this.depensePiece.length; index++) {
      this.total_ttc = this.depensePiece[index].ttc_dp + this.total_ttc;
      this.total_ht = this.depensePiece[index].hors_taxe + this.total_ht;
      // console.log("I " + index + ":" + this.depensePiece[index].ttc_dp);
      console.log("total ttc " + this.total_ttc);
      console.log("total hors taxe " + this.total_ht);

    }
    this.pieces = [];
  }


  recalculer(qte, index) {
    console.log("qtee" + qte.value);
    this.depensePiece[index].qte = qte.value;
    this.qt = this.depensePiece[index].qte;
    console.log("qtttee changé" + this.qt);

    this.depensePiece[index].hors_taxe = this.qt * this.pu;
    this.ht = this.depensePiece[index].hors_taxe;
    console.log("ht changé : " + this.ht);

    this.depensePiece[index].ttc_dp = ((this.ht * (100 + this.tv) / 100));

    this.total_ttc = 0;
    this.total_ht = 0;
    for (let index = 0; index < this.depensePiece.length; index++) {
      this.total_ttc = this.depensePiece[index].ttc_dp + this.total_ttc;
      this.total_ht = this.depensePiece[index].hors_taxe + this.total_ht;
    }

  }



  affiche(piece) {
    for (let index = 0; index < this.depensePiece.length; index++) {
      this.depensePiece[0].piece_dep.des_piece = "abc";
      console.log("element" + this.depensePiece[index].piece_dep.des_piece, "index :" + index);
    }
  }



  gotoList() {
    this.router.navigate(['/listDepense']);
  }


}
