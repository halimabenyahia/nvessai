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

const routes: Routes = [

  { path : '' , component : AuthentificationComponent} ,
  { path : 'header' , component : HeaderComponent, canActivate :[GuardAuth] },
  { path : 'acceuil' , component : AcceuilComponent , canActivate :[GuardAuth]},

  { path : 'depenses' , component : DepenseComponent , canActivate :[GuardAuth], children : [
    { path : 'addDepense' , component : FormDepenseComponent},
    { path : 'editDepense/:id' , component : InfoDepenseComponent},
    { path : 'listDepense' , component : ListDepenseComponent}
  ]},

  {path:'Vehicule' , component : VehiculeComponent , canActivate :[GuardAuth], children: [
   // { path: '', redirectTo: '/Vehicule', pathMatch: 'full' },
    { path: 'addVehicule', component: VehiculFormComponent  },
    { path: 'editVehicule/:id', component: VehiculInfoComponent  },
    { path: 'listVehicules', component: VehiculListComponent  },
    { path : 'chercherVehicule' , component : ChercherVehiculeComponent}]
  },
  { path : 'utilisateurs' , component : UtilisateurComponent , children :[
    { path : 'addUtilisateur' , component : FormUtilisateurComponent},
    { path : 'editUtilisateur/:id' , component : EditUtilisateurComponent},
    { path : 'listUtilisateur' , component : ListUtilisateurComponent}
  ]},

  {path:'Chauffeur' , component : ChauffeurComponent, canActivate :[GuardAuth] , children: [
   // { path: '', redirectTo: '/Chauffeur', pathMatch: 'full' },
    { path: 'addChauffeur', component: FormChauffeurComponent },
    { path: 'editChauffeur/:id', component: InfoChauffeurComponent },
    { path: 'listChauffeur', component: ListChauffeurComponent}
    ]
  },

  {path:'Boite'  , component : BoiteComponent , canActivate :[GuardAuth], children : [
   // { path :'' , redirectTo : '/Boite' , pathMatch : 'full'},
    { path : 'addBoite' , component : FormBoiteComponent},
    { path : 'editBoite/:id' , component : InfoBoiteComponent} ,
    { path : 'listBoite' , component : ListBoiteComponent}
  ]
},

  {path: 'Marque' , component : MarqueComponent, canActivate :[GuardAuth] , children : [
  //  { path :'' , redirectTo : '/Marque' , pathMatch : 'full'},
    { path : 'addMarque' , component : FormMarqueComponent },
    { path : 'editMarque/:id' , component : InfoMarqueComponent },
    { path : 'listMarque' , component : ListMarqueComponent}
   ]
  },

  {path:'Assurance' , component : AssuranceComponent, canActivate :[GuardAuth] , children : [
   // { path :'' , redirectTo : '/Assurance' , pathMatch : 'full'},
    { path : 'addAssurance' , component : FormAssuranceComponent},
    { path : 'editAssurance/:id' , component : InfoAssuranceComponent},
    { path : 'listAssurance' , component : ListAssuranceComponent}
  ]
  },

  {path: 'Modele' , component : ModeleComponent , canActivate :[GuardAuth], children : [
   // { path :'' , redirectTo : '/Modele' , pathMatch : 'full'},
    { path : 'addModele' , component : FormModeleComponent},
    { path : 'editModele/:id' , component : InfoModeleComponent},
    { path : 'listModele' , component : ListModeleComponent}
  ]
},

  {path: 'Energie' , component : EnergieComponent , canActivate :[GuardAuth], children : [
   // { path :'' , redirectTo : '/Energie' , pathMatch : 'full'},
    { path : 'addEnergie' , component : FormEnergieComponent},
    { path : 'editEnergie/:id' , component : InfoEnergieComponent},
    { path : 'listEnergie' , component : ListEnergieComponent}
  ]
},

  {path : 'Affectation' , component : AffectationComponent, canActivate :[GuardAuth] , children :[
   // { path :'' , redirectTo : '/Affectation' , pathMatch : 'full'},
    { path : 'addAffectation' , component : FormAffectationComponent},
    { path : 'editAffectation/:id' , component : InfoAffectationComponent},
    { path : 'listAffectation' , component : ListAffectationComponent}
  ]},
  {path: 'TypeV' ,component : TypeVComponent, canActivate :[GuardAuth] , children : [
   // { path :'' , redirectTo : '/TypeV' , pathMatch : 'full'},
    { path : 'addTypeV' , component : FormTypeVComponent},
    { path : 'editTypeV/:id' , component : InfoTypeVComponent},
    { path : 'listTypeV' , component : ListTypeVComponent}
  ]},
  {path : 'filtrage' , component : FiltrageComponent, canActivate :[GuardAuth] , children :[
    { path : 'filtre' , component : AfficheTableComponent},
    { path : 'graphe' , component : GrapheComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

