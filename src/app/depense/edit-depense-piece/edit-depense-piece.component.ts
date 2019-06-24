import { Component, OnInit } from '@angular/core';
import { DepensePieceService } from 'src/app/services/depense-piece.service';
import { DepenseService } from 'src/app/services/depense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense_piece } from 'src/app/entity/depense_piece';
import { Depense } from 'src/app/entity/depense';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';
import { PieceService } from 'src/app/services/piece.service';
import { Piece } from 'src/app/entity/piece';

@Component({
  selector: 'app-edit-depense-piece',
  templateUrl: './edit-depense-piece.component.html',
  styleUrls: ['./edit-depense-piece.component.css']
})
export class EditDepensePieceComponent implements OnInit {

  depense_piece : Depense_piece ;
  depenses : Depense ;
  vehicules : Vehicule [];
  selectedVehicule ='';
  idSelectedVehicule : number ;
  depensePiece: Depense_piece[] = [];
  piece: Piece;
  isSelectedPiece = true;
  pieces: Piece[];
  selectedPiece = '';
  idSelectedPiece: number;
  q: number;
  myTable = [];
  ht: number;
  ttc: number;
  tva: number;
  montant_total: number;
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
  iSelectPiece = false;


  constructor(private depensePieceService : DepensePieceService,
              private depenseService : DepenseService,
              private activatedRoute : ActivatedRoute,
              private vehiculeService : VehiculeServiceService,
              private pieceService : PieceService,
              private router : Router
              ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) =>
      {
        console.log(params) ;
        this.depenseService.getDepensesById(params.id).subscribe(
          (depense : Depense) =>
          {
            this.depenses = depense ;
            console.log(this.depenses);
          }
        );
        this.depensePieceService.getDepensePieceById(params.id).subscribe(
          (depensePiece : Depense_piece) =>
          {
            this.depense_piece=depensePiece;
            console.log(this.depense_piece);
          }
        );
        
      }
    );

    this.depensePiece = [
      new Depense_piece()
      //new Depense_piece(),
    ];

    for (let index = 0; index < this.depensePiece.length; index++) {

      this.depensePiece[index].qte = 1;
      this.depensePiece[index].ttc_dp = 0;
      this.depensePiece[index].hors_taxe = 0;
      this.depensePiece[index].id_depense = this.dernierD + 1;

    }
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


  chercherPiece(parametre) {
    this.pieceService.getbyDespiece(parametre).subscribe(
      (piece: Piece[]) => {
        this.pieces = piece;
        console.log(piece);
      }
    );
  }

  selectPiece(selectedP, index) {

    this.idSelectedPiece = selectedP.id_piece;
    console.log(selectedP);
    console.log("index@selectPiece" + index);
    console.log("des_piece@selectPiece" + selectedP.des_piece);
    console.log("id_piece@selectPiece" + selectedP.id_piece);

    this.depensePiece[index].piece_des = selectedP.des_piece;
    this.depensePiece[index].id_piece = selectedP.id_piece;

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

    this.depensePiece[index].hors_taxe=this.ht ;

    this.depensePiece[index].ttc_dp = ((this.ht * (100 + this.tv) / 100));
    console.log("calculee ttcc " + this.depensePiece[index].ttc_dp);
    console.log("ttc_dp" + this.depensePiece[index].ttc_dp);


    this.depensePiece[index].id_depense = this.dernierD + 1;
    console.log("indice du nv depense enregistré " + this.depensePiece[index].id_depense);


    this.total_ttc = 0;
    this.total_ht = 0;
    for (let index = 0; index < this.depensePiece.length; index++) {
      this.total_ttc = this.depensePiece[index].ttc_dp + this.total_ttc;
      this.total_ht = this.depensePiece[index].hors_taxe + this.total_ht;
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


  update(depenses,depense_piece){
    this.depenseService.edit(depenses).subscribe(
       (response) =>
       {
         console.log("depense modifié") ;
         this.router.navigate(['listDepensePiece']);
       }
    );
    this.depensePieceService.edit(depense_piece).subscribe(
      (response) =>
      {
        console.log("depense pièce modifié");
        this.router.navigate(['listDepensePiece']);
      }
    );

  }


}
