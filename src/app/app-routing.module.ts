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
import { ContratAssComponent } from './contrat-ass/contrat-ass.component';
import { FormContratComponent } from './contrat-ass/form-contrat/form-contrat.component';
import { ListContratComponent } from './contrat-ass/list-contrat/list-contrat.component';
import { InfoChauffeurComponent } from './chauffeur/info-chauffeur/info-chauffeur.component';

const routes: Routes = [


  {path:'Vehicule' , component : VehiculeComponent , children: [
    { path: '', redirectTo: '/Vehicule', pathMatch: 'full' },
    { path: 'addVehicule', component: VehiculFormComponent },
    { path: 'editVehicule', component: VehiculFormComponent },
    { path: 'listVehicules', component: VehiculListComponent }]
  },

  {path:'Chauffeur' , component : ChauffeurComponent , children: [
   // { path: '', redirectTo: '/Chauffeur', pathMatch: 'full' },
    { path: 'addChauffeur', component: FormChauffeurComponent },
    { path: 'editChauffeur', component: FormChauffeurComponent },
    { path: 'listChauffeur', component: ListChauffeurComponent},
    { path : 'infoChauffeur' , component : InfoChauffeurComponent}
    
    ]
  },

  {path:'Boite'  , component : BoiteComponent , children : [
    { path :'' , redirectTo : '/Boite' , pathMatch : 'full'},
    { path : 'addBoite' , component : FormBoiteComponent },
    { path : 'editBoite' , component : FormBoiteComponent} ,
    { path : 'listBoite' , component : ListBoiteComponent}
  ]
},

  {path: 'Marque' , component : MarqueComponent , children : [
    { path :'' , redirectTo : '/Marque' , pathMatch : 'full'},
    { path : 'addMarque' , component : FormMarqueComponent },
    { path : 'editMarque' , component : FormMarqueComponent },
    { path : 'listMarque' , component : ListMarqueComponent}
   ]
  },

  {path:'Assurance' , component : AssuranceComponent , children : [
    { path :'' , redirectTo : '/Assurance' , pathMatch : 'full'},
    { path : 'addAssurance' , component : FormAssuranceComponent},
    { path : 'editAssurance' , component : FormAssuranceComponent},
    { path : 'listAssurance' , component : ListAssuranceComponent}
  ]
  },

  {path: 'Modele' , component : ModeleComponent , children : [
    { path :'' , redirectTo : '/Modele' , pathMatch : 'full'},
    { path : 'addModele' , component : FormModeleComponent},
    { path : 'editModele' , component : FormModeleComponent},
    { path : 'listModele' , component : ListModeleComponent}
  ]
},

  {path: 'Energie' , component : EnergieComponent , children : [
    { path :'' , redirectTo : '/Energie' , pathMatch : 'full'},
    { path : 'addEnergie' , component : FormEnergieComponent},
    { path : 'editEnergie' , component : FormEnergieComponent},
    { path : 'listEnergie' , component : ListEnergieComponent}
  ]
},

  {path : 'Affectation' , component : AffectationComponent , children :[
    { path :'' , redirectTo : '/Affectation' , pathMatch : 'full'},
    { path : 'addAffectation' , component : FormAffectationComponent},
    { path : 'editAffectation' , component : FormAffectationComponent},
    { path : 'listAffectation' , component : ListAffectationComponent}
  ]},
  {path: 'TypeV' ,component : TypeVComponent , children : [
    { path :'' , redirectTo : '/TypeV' , pathMatch : 'full'},
    { path : 'addTypeV' , component : FormTypeVComponent},
    { path : 'editTypeV' , component : FormTypeVComponent},
    { path : 'listTypeV' , component : ListTypeVComponent}
  ]},
  {path :'Contrat' , component : ContratAssComponent , children : [
    { path :'' ,  redirectTo : '/Contrat' , pathMatch : 'full'},
    { path : 'addContrat' , component : FormContratComponent},
    { path : 'editContrat' , component : FormContratComponent},
    { path : 'listContrat' , component : ListContratComponent}
  ]}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
