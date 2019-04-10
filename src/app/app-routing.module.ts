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

const routes: Routes = [


  {path:'Vehicule' , component : VehiculeComponent , children: [
    { path: '', redirectTo: '/Vehicule', pathMatch: 'full' },
    { path: 'addVehicule', component: VehiculFormComponent },
    { path: 'editVehicule/:id', component: VehiculInfoComponent },
    { path: 'listVehicules', component: VehiculListComponent },
    { path : 'chercherVehicule' , component : ChercherVehiculeComponent}]
  },

  {path:'Chauffeur' , component : ChauffeurComponent , children: [
   // { path: '', redirectTo: '/Chauffeur', pathMatch: 'full' },
    { path: 'addChauffeur', component: FormChauffeurComponent },
    { path: 'editChauffeur/:id', component: InfoChauffeurComponent },
    { path: 'listChauffeur', component: ListChauffeurComponent}
    ]
  },

  {path:'Boite'  , component : BoiteComponent , children : [
    { path :'' , redirectTo : '/Boite' , pathMatch : 'full'},
    { path : 'addBoite' , component : FormBoiteComponent },
    { path : 'editBoite/:id' , component : InfoBoiteComponent} ,
    { path : 'listBoite' , component : ListBoiteComponent}
  ]
},

  {path: 'Marque' , component : MarqueComponent , children : [
    { path :'' , redirectTo : '/Marque' , pathMatch : 'full'},
    { path : 'addMarque' , component : FormMarqueComponent },
    { path : 'editMarque/:id' , component : InfoMarqueComponent },
    { path : 'listMarque' , component : ListMarqueComponent}
   ]
  },

  {path:'Assurance' , component : AssuranceComponent , children : [
    { path :'' , redirectTo : '/Assurance' , pathMatch : 'full'},
    { path : 'addAssurance' , component : FormAssuranceComponent},
    { path : 'editAssurance/:id' , component : InfoAssuranceComponent},
    { path : 'listAssurance' , component : ListAssuranceComponent}
  ]
  },

  {path: 'Modele' , component : ModeleComponent , children : [
    { path :'' , redirectTo : '/Modele' , pathMatch : 'full'},
    { path : 'addModele' , component : FormModeleComponent},
    { path : 'editModele/:id' , component : InfoModeleComponent},
    { path : 'listModele' , component : ListModeleComponent}
  ]
},

  {path: 'Energie' , component : EnergieComponent , children : [
    { path :'' , redirectTo : '/Energie' , pathMatch : 'full'},
    { path : 'addEnergie' , component : FormEnergieComponent},
    { path : 'editEnergie/:id' , component : InfoEnergieComponent},
    { path : 'listEnergie' , component : ListEnergieComponent}
  ]
},

  {path : 'Affectation' , component : AffectationComponent , children :[
    { path :'' , redirectTo : '/Affectation' , pathMatch : 'full'},
    { path : 'addAffectation' , component : FormAffectationComponent},
    { path : 'editAffectation/:id' , component : InfoAffectationComponent},
    { path : 'listAffectation' , component : ListAffectationComponent}
  ]},
  {path: 'TypeV' ,component : TypeVComponent , children : [
    { path :'' , redirectTo : '/TypeV' , pathMatch : 'full'},
    { path : 'addTypeV' , component : FormTypeVComponent},
    { path : 'editTypeV/:id' , component : InfoTypeVComponent},
    { path : 'listTypeV' , component : ListTypeVComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

