import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VehiculFormComponent } from './vehicule/vehicul-form/vehicul-form.component';
import { VehiculListComponent } from './vehicule/vehicul-list/vehicul-list.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { FormChauffeurComponent } from './chauffeur/form-chauffeur/form-chauffeur.component';
import { ListChauffeurComponent } from './chauffeur/list-chauffeur/list-chauffeur.component';
import { BoiteComponent } from './boite/boite.component';
import { FormBoiteComponent } from './boite/form-boite/form-boite.component';
import { ListBoiteComponent } from './boite/list-boite/list-boite.component';
import { MarqueComponent } from './marque/marque.component';
import { FormMarqueComponent } from './marque/form-marque/form-marque.component';
import { ListMarqueComponent } from './marque/list-marque/list-marque.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { FormAssuranceComponent } from './assurance/form-assurance/form-assurance.component';
import { ListAssuranceComponent } from './assurance/list-assurance/list-assurance.component';
import { ModeleComponent } from './modele/modele.component';
import { FormModeleComponent } from './modele/form-modele/form-modele.component';
import { ListModeleComponent } from './modele/list-modele/list-modele.component';
import { EnergieComponent } from './energie/energie.component';
import { FormEnergieComponent } from './energie/form-energie/form-energie.component';
import { ListEnergieComponent } from './energie/list-energie/list-energie.component';
import { AffectationComponent } from './affectation/affectation.component';
import { FormAffectationComponent } from './affectation/form-affectation/form-affectation.component';
import { ListAffectationComponent } from './affectation/list-affectation/list-affectation.component';
import { TypeVComponent } from './type-v/type-v.component';
import { FormTypeVComponent } from './type-v/form-type-v/form-type-v.component';
import { ListTypeVComponent } from './type-v/list-type-v/list-type-v.component';
import { InfoChauffeurComponent } from './chauffeur/info-chauffeur/info-chauffeur.component';
import { VehiculInfoComponent } from './vehicule/vehicul-info/vehicul-info.component';
import { InfoBoiteComponent } from './boite/info-boite/info-boite.component';
import { InfoMarqueComponent } from './marque/info-marque/info-marque.component';
import { InfoAssuranceComponent } from './assurance/info-assurance/info-assurance.component';
import { InfoModeleComponent } from './modele/info-modele/info-modele.component';
import { InfoEnergieComponent } from './energie/info-energie/info-energie.component';
import { InfoAffectationComponent } from './affectation/info-affectation/info-affectation.component';
import { InfoTypeVComponent } from './type-v/info-type-v/info-type-v.component';
import { ChercherVehiculeComponent } from './vehicule/chercher-vehicule/chercher-vehicule.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderComponent } from './header/header.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormUtilisateurComponent } from './utilisateur/form-utilisateur/form-utilisateur.component';
import { EditUtilisateurComponent } from './utilisateur/edit-utilisateur/edit-utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DepenseComponent } from './depense/depense.component';
import { FormDepenseComponent } from './depense/form-depense/form-depense.component';
import { InfoDepenseComponent } from './depense/info-depense/info-depense.component';
import { ListDepenseComponent } from './depense/list-depense/list-depense.component';
import { GuardAuth } from './guard/Guard';
import { FiltrageComponent } from './filtrage/filtrage.component';
import { ConnectGuard } from './guard/guardConnect';
import { AfficheTableComponent } from './filtrage/affiche-table/affiche-table.component';
import { GrapheComponent } from './filtrage/graphe/graphe.component';
import { ResultatComponent } from './vehicule/resultat/resultat.component';
import { AffectationResultComponent } from './vehicule/affectation-result/affectation-result.component';
import { TypeDepenseComponent } from './type-depense/type-depense.component';
import { FormTypeDepenseComponent } from './type-depense/form-type-depense/form-type-depense.component';
import { InfoTypeDepenseComponent } from './type-depense/info-type-depense/info-type-depense.component';
import { ListTypeDepenseComponent } from './type-depense/list-type-depense/list-type-depense.component';
import { TypePieceComponent } from './type-piece/type-piece.component';
import { FormTypePieceComponent } from './type-piece/form-type-piece/form-type-piece.component';
import { InfoTypePieceComponent } from './type-piece/info-type-piece/info-type-piece.component';
import { ListTypePieceComponent } from './type-piece/list-type-piece/list-type-piece.component';
import { PieceComponent } from './piece/piece.component';
import { InfoPieceComponent } from './piece/info-piece/info-piece.component';
import { ListPieceComponent } from './piece/list-piece/list-piece.component';
import { ChercherAssuranceComponent } from './vehicule/chercher-assurance/chercher-assurance.component';
import { ChercherVignetteComponent } from './vehicule/chercher-vignette/chercher-vignette.component';

const routes: Routes = [

  { path : '' , component : AuthentificationComponent} ,
  { path : 'header' , component : HeaderComponent, canActivate :[GuardAuth] },
  { path : 'acceuil' , component : AcceuilComponent , canActivate :[GuardAuth]},

  { path : 'depenses' , component : DepenseComponent , canActivate :[GuardAuth], children : [
    { path : 'addDepense' , component : FormDepenseComponent},
    { path : 'editDepense/:id' , component : InfoDepenseComponent},
    
  ]},
  { path : 'listDepense' , component : ListDepenseComponent, canActivate :[GuardAuth]},

  { path: 'addVehicule', component: VehiculFormComponent  },
  { path: 'listVehicules', component: VehiculListComponent  },
  { path : 'chercherVehicule' , component : ChercherVehiculeComponent},
  { path : 'resultat/:des_energie' , component : ResultatComponent},
  { path : 'resultAffectation/:des_affectation' , component : AffectationResultComponent},
  { path: 'editVehicule/:id', component: VehiculInfoComponent  },
  { path : 'chercherAssurance' , component : ChercherAssuranceComponent},
  { path : 'chercherVignette' , component : ChercherVignetteComponent},
  {path:'Vehicule' , component : VehiculeComponent , canActivate :[GuardAuth]},

  { path: 'addChauffeur', component: ChauffeurComponent },
  { path: 'editChauffeur/:id', component: InfoChauffeurComponent },
  { path: 'listChauffeur', component: ListChauffeurComponent},
  {path:'Chauffeur' , component : ChauffeurComponent, canActivate :[GuardAuth]},

  { path : 'addBoite' , component : BoiteComponent},
  { path : 'editBoite/:id' , component : InfoBoiteComponent} ,
  { path : 'listBoite' , component : ListBoiteComponent},
  {path:'Boite'  , component : BoiteComponent , canActivate :[GuardAuth]},

  { path : 'addMarque' , component : FormMarqueComponent },
  { path : 'editMarque/:id' , component : InfoMarqueComponent },
  { path : 'listMarque' , component : ListMarqueComponent},
  {path: 'Marque' , component : MarqueComponent, canActivate :[GuardAuth]},


  { path : 'addAssurance' , component : AssuranceComponent},
  { path : 'editAssurance/:id' , component : InfoAssuranceComponent},
  { path : 'listAssurance' , component : ListAssuranceComponent},
  {path:'Assurance' , component : AssuranceComponent, canActivate :[GuardAuth]},

  { path : 'addModele' , component : FormModeleComponent},
  { path : 'editModele/:id' , component : InfoModeleComponent},
  { path : 'listModele' , component : ListModeleComponent},
  {path: 'Modele' , component : ModeleComponent , canActivate :[GuardAuth]},

{ path : 'addEnergie' , component : FormEnergieComponent},
{ path : 'editEnergie/:id' , component : InfoEnergieComponent},
{ path : 'listEnergie' , component : ListEnergieComponent},
{path: 'Energie' , component : EnergieComponent , canActivate :[GuardAuth]},


{ path : 'addAffectation' , component : AffectationComponent},
{ path : 'listAffectation' , component : ListAffectationComponent},
{ path : 'editAffectation/:id' , component : InfoAffectationComponent},
{ path : 'Affectation' , component : AffectationComponent, canActivate :[GuardAuth]},


{ path : 'addTypeV' , component : FormTypeVComponent},
{ path : 'editTypeV/:id' , component : InfoTypeVComponent},
{ path : 'listTypeV' , component : ListTypeVComponent},
{path: 'TypeV' ,component : TypeVComponent, canActivate :[GuardAuth] },

  {path : 'filtrage' , component : FiltrageComponent, canActivate :[GuardAuth] , children :[
    { path : 'filtre' , component : AfficheTableComponent},
    { path : 'graphe' , component : GrapheComponent}
  ]},

  { path : 'addTypeDepense' , component : TypeDepenseComponent},
  { path : 'editTypeDepense/:id' , component : InfoTypeDepenseComponent},
  { path : 'listTypeDepense' , component : ListTypeDepenseComponent},
  {path : 'typeDepenses' , component : TypeDepenseComponent },


  { path : 'addTypePiece' , component: TypePieceComponent},
  { path : 'editTypePiece/:id' , component : InfoTypePieceComponent},
  { path : 'listTypePiece' , component : ListTypePieceComponent},
  {path : 'typePieces' , component : TypePieceComponent},


  {path : 'pieces' , component : PieceComponent , canActivate :[GuardAuth]}, //add
  { path : 'listPiece'  , component : ListPieceComponent, canActivate :[GuardAuth]},
  { path : 'editPiece/:id' , component : InfoPieceComponent, canActivate :[GuardAuth]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

