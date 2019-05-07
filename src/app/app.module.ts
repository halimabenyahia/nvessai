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
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule } from '@angular/forms';
import { ChercherVehiculeComponent } from './vehicule/chercher-vehicule/chercher-vehicule.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormUtilisateurComponent } from './utilisateur/form-utilisateur/form-utilisateur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { EditUtilisateurComponent } from './utilisateur/edit-utilisateur/edit-utilisateur.component';
import { DepenseComponent } from './depense/depense.component';
import { FormDepenseComponent } from './depense/form-depense/form-depense.component';
import { ListDepenseComponent } from './depense/list-depense/list-depense.component';
import { InfoDepenseComponent } from './depense/info-depense/info-depense.component';
import { loginInterceptorProvider } from './interceptor/interceptor';
import { GuardAuth } from './guard/Guard';




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
    AcceuilComponent,
    ChercherVehiculeComponent,
    AuthentificationComponent,
    UtilisateurComponent,
    FormUtilisateurComponent,
    ListUtilisateurComponent,
    EditUtilisateurComponent,
    DepenseComponent,
    FormDepenseComponent,
    ListDepenseComponent,
    InfoDepenseComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [VehiculeServiceService,loginInterceptorProvider,GuardAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
