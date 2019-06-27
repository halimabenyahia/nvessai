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
import { ListPieceComponent } from './piece/list-piece/list-piece.component';
import { InfoPieceComponent } from './piece/info-piece/info-piece.component';
import { ChercherAssuranceComponent } from './vehicule/chercher-assurance/chercher-assurance.component';
import { ChercherVignetteComponent } from './vehicule/chercher-vignette/chercher-vignette.component';
import { GuardAdmin } from './guard/guardAdmin';
import { GuardAgent } from './guard/guardAgent';
import { EntretienComponent } from './entretien/entretien.component';
import { ListEntretienComponent } from './entretien/list-entretien/list-entretien.component';
import { InfoEntretienComponent } from './entretien/info-entretien/info-entretien.component';
import { TypeEntretienComponent } from './type-entretien/type-entretien.component';
import { ListTypeEntretienComponent } from './type-entretien/list-type-entretien/list-type-entretien.component';
import { InfoTypeEntretienComponent } from './type-entretien/info-type-entretien/info-type-entretien.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { ListDepensePieceComponent } from './depense/list-depense-piece/list-depense-piece.component';
import { ListDepenseCarburantComponent } from './depense/list-depense-carburant/list-depense-carburant.component';
import { DetailVehiculeComponent } from './vehicule/detail-vehicule/detail-vehicule.component';
import { DashbordDepenseComponent } from './depense/dashbord-depense/dashbord-depense.component';
import { SumDepensePieceComponent } from './depense/sum-depense-piece/sum-depense-piece.component';
import { ListeCarburantComponent } from './depense/liste-carburant/liste-carburant.component';
import { EditDepensePieceComponent } from './depense/edit-depense-piece/edit-depense-piece.component';
import { InfoDepensePieceComponent } from './depense/info-depense-piece/info-depense-piece.component' ;






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
    FiltrageComponent,
    AfficheTableComponent,
    GrapheComponent,
    ResultatComponent,
    AffectationResultComponent,
    TypeDepenseComponent,
    FormTypeDepenseComponent,
    InfoTypeDepenseComponent,
    ListTypeDepenseComponent,
    TypePieceComponent,
    FormTypePieceComponent,
    InfoTypePieceComponent,
    ListTypePieceComponent,
    PieceComponent,
    ListPieceComponent,
    InfoPieceComponent,
    ChercherAssuranceComponent,
    ChercherVignetteComponent,
    EntretienComponent,
    ListEntretienComponent,
    InfoEntretienComponent,
    TypeEntretienComponent,
    ListTypeEntretienComponent,
    InfoTypeEntretienComponent,
    ListDepensePieceComponent,
    ListDepenseCarburantComponent,
    DetailVehiculeComponent,
    DashbordDepenseComponent,
    SumDepensePieceComponent,
    ListeCarburantComponent,
    EditDepensePieceComponent,
    InfoDepensePieceComponent
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
    
  ],
  providers: [
    VehiculeServiceService,
    loginInterceptorProvider,
    GuardAuth,
    ConnectGuard,
    GuardAdmin,
    GuardAgent
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
