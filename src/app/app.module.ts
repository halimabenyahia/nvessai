import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VehiculInfoComponent } from './vehicule/vehicul-info/vehicul-info.component';
import { VehiculFormComponent } from './vehicule/vehicul-form/vehicul-form.component';
import { VehiculListComponent } from './vehicule/vehicul-list/vehicul-list.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculeServiceService } from './services/vehicule-service.service';
import { FooterComponent } from './footer/footer.component';
import { ModeleComponent } from './modele/modele.component';
import { MarqueComponent } from './marque/marque.component';
import { BoiteComponent } from './boite/boite.component';
import { EnergieComponent } from './energie/energie.component';
import { ContratAssComponent } from './contrat-ass/contrat-ass.component';
import { AssuranceComponent } from './assurance/assurance.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { ListChauffeurComponent } from './chauffeur/list-chauffeur/list-chauffeur.component';
import { FormChauffeurComponent } from './chauffeur/form-chauffeur/form-chauffeur.component';
import { InfoChauffeurComponent } from './chauffeur/info-chauffeur/info-chauffeur.component';
import { FormBoiteComponent } from './boite/form-boite/form-boite.component';
import { ListBoiteComponent } from './boite/list-boite/list-boite.component';
import { InfoBoiteComponent } from './boite/info-boite/info-boite.component';
import { FormMarqueComponent } from './marque/form-marque/form-marque.component';
import { ListMarqueComponent } from './marque/list-marque/list-marque.component';
import { InfoMarqueComponent } from './marque/info-marque/info-marque.component';
import { FormAssuranceComponent } from './assurance/form-assurance/form-assurance.component';
import { ListAssuranceComponent } from './assurance/list-assurance/list-assurance.component';
import { InfoAssuranceComponent } from './assurance/info-assurance/info-assurance.component';
import { FormModeleComponent } from './modele/form-modele/form-modele.component';
import { ListModeleComponent } from './modele/list-modele/list-modele.component';
import { InfoModeleComponent } from './modele/info-modele/info-modele.component';
import { FormEnergieComponent } from './energie/form-energie/form-energie.component';
import { ListEnergieComponent } from './energie/list-energie/list-energie.component';
import { InfoEnergieComponent } from './energie/info-energie/info-energie.component';
import { AffectationComponent } from './affectation/affectation.component';
import { FormAffectationComponent } from './affectation/form-affectation/form-affectation.component';
import { ListAffectationComponent } from './affectation/list-affectation/list-affectation.component';
import { InfoAffectationComponent } from './affectation/info-affectation/info-affectation.component';
import { TypeVComponent } from './type-v/type-v.component';
import { FormTypeVComponent } from './type-v/form-type-v/form-type-v.component';
import { ListTypeVComponent } from './type-v/list-type-v/list-type-v.component';
import { InfoTypeVComponent } from './type-v/info-type-v/info-type-v.component';
import { FormContratComponent } from './contrat-ass/form-contrat/form-contrat.component';
import { ListContratComponent } from './contrat-ass/list-contrat/list-contrat.component';
import { InfoContratComponent } from './contrat-ass/info-contrat/info-contrat.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehiculeComponent,
    VehiculInfoComponent,
    VehiculFormComponent,
    VehiculListComponent,
    FooterComponent,
    ModeleComponent,
    MarqueComponent,
    BoiteComponent,
    EnergieComponent,
    ContratAssComponent,
    AssuranceComponent,
    ChauffeurComponent,
    ListChauffeurComponent,
    FormChauffeurComponent,
    InfoChauffeurComponent,
    FormBoiteComponent,
    ListBoiteComponent,
    InfoBoiteComponent,
    FormMarqueComponent,
    ListMarqueComponent,
    InfoMarqueComponent,
    FormAssuranceComponent,
    ListAssuranceComponent,
    InfoAssuranceComponent,
    FormModeleComponent,
    ListModeleComponent,
    InfoModeleComponent,
    FormEnergieComponent,
    ListEnergieComponent,
    InfoEnergieComponent,
    AffectationComponent,
    FormAffectationComponent,
    ListAffectationComponent,
    InfoAffectationComponent,
    TypeVComponent,
    FormTypeVComponent,
    ListTypeVComponent,
    InfoTypeVComponent,
    FormContratComponent,
    ListContratComponent,
    InfoContratComponent,
    AcceuilComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [VehiculeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
