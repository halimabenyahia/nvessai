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
        let t: TypeDepense;
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
  }

  affiche(designationP) {
    console.log(designationP);
    this.pieceService.getbyDespiece(designationP.value).subscribe(
      (piece: Piece) => {
        this.piece = piece;
        console.log(piece);
      }
    );
  }

  chercherPiece(parametre) {
    this.pieceService.getbyDespiece(parametre).subscribe(
      (piece: Piece[]) => {
        this.pieces = piece;
        console.log(piece);
      }
    );
  }
  selectPiece(selectedPiece) {
    console.log(selectedPiece);
    this.selectedPiece = selectedPiece.des_piece;
    this.idSelectedPiece = selectedPiece.id_piece;
    this.pieces = [];
  }

  ajouterLigne() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
  }


}
