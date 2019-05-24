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

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {

  nameRegex = '[a-zA-Z ]+';
  vehicule : Vehicule ;
  vehicules : Vehicule[];
  idSelectedVehicule : number ;
  selectedVehicule='';
  typeDepense : TypeDepense ;
  selectedTypeDepense='';
  idSelectedtypeDepense : number ;
  typeDep : TypeDepense [];
  type : TypeDepense ;
  selectedTypePiece='';
  idSelectedtypePiece : number ;
  typePiece : TypePiece ;
  typeP : TypePiece [];
  depense : Depense ;
  piece : Piece ;
  
  constructor(private depenseService : DepenseService,
              private router : Router,
              private vehiculeService : VehiculeServiceService,
              private typeDepenseService : TypeDepenseService,
              private typePieceService : TypePieceService) { }

  ngOnInit() {
    this.vehiculeService.getAllVehicule().subscribe(
      (vehicule : Vehicule) =>
      {
        this.vehicule=vehicule;
      }
    );

    this.typeDepenseService.getAllTypeDepense().subscribe(
      (typeDepense : TypeDepense) =>
      {
        this.typeDepense=typeDepense ;
      }
    );

    this.typePieceService.getAllTypePiece().subscribe(
      (typePiece : TypePiece) =>
      {
        this.typePiece=typePiece
      }
    );
  }

  add(formulaire : NgForm){
    this.depenseService.addDepense(formulaire.value).subscribe(
      (response) =>
      {
        this.router.navigate(['depenses/listDepense']);
      },
      (error) =>
      {
        console.log("probleme de connexion au serveur");
      }
    );
  }

  chercherVehicule(parametre){
    this.vehiculeService.getbyImmatricle(parametre).subscribe(
      (vehicule : Vehicule[]) =>
      {
        this.vehicules=vehicule;
      }
    );
  }
  selectVehicule(selectedVehicule){
    console.log(selectedVehicule);
    this.selectedVehicule = selectedVehicule.immatriculation ;
    this.idSelectedVehicule = selectedVehicule.id_vehicule;
    this.vehicules=[];
  }

  chercherTypeDepense(parametre){
    this.typeDepenseService.getTypedepenseParam(parametre).subscribe(
      (typeDepense : TypeDepense[]) =>
      {
        this.typeDep=typeDepense ;
      }
    );
  }
  selectType(selectedTypeDepense){
    console.log(selectedTypeDepense);
    this.selectedTypeDepense = selectedTypeDepense.designation_typeDep;
    this.idSelectedtypeDepense = selectedTypeDepense.id_typeDepense ;
    this.typeDep = [];
    }

    chercherTypePiece(parametre){
      this.typePieceService.getTypePieceParam(parametre).subscribe(
        (typePiece : TypePiece[]) =>
        {
          this.typeP=typePiece ;
        }
      );
    }
    selectTypeP(selectedTypePiece){
      console.log(selectedTypePiece);
      this.selectedTypePiece = selectedTypePiece.des_typePiece;
      this.idSelectedtypePiece = selectedTypePiece.id_typePiece ;
      this.typeP = [];
      }

}
