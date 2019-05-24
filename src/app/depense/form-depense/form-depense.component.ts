import { Component, OnInit } from '@angular/core';
import { DepenseService } from 'src/app/services/depense.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculeServiceService } from 'src/app/services/vehicule-service.service';
import { Vehicule } from 'src/app/entity/vehicule';
import { TypeDepenseService } from 'src/app/services/type-depense.service';
import { TypeDepense } from 'src/app/entity/typeDepense';
import { TypePieceService } from 'src/app/services/type-piece.service';
import { TypePiece } from 'src/app/entity/typePiece';
import { Piece } from 'src/app/entity/piece';
import { Depense } from 'src/app/entity/depense';

@Component({
  selector: 'app-form-depense',
  templateUrl: './form-depense.component.html',
  styleUrls: ['./form-depense.component.css']
})
export class FormDepenseComponent implements OnInit {

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
