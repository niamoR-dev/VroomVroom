import { FicheEntretienComponent } from './components/fiche-entretien/components/modifier-fiche-entretien/fiche-entretien.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChefAtelierRoutingModule } from "../chef-atelier/chef-atelier-routing.module";
import { CommercialRoutingModule } from "../commercial/commercial-routing.module";
import { MecanicienRoutingModule } from "../mecanicien/mecanicien-routing.module";
import { RechercheFichePipe } from "./components/fiche-entretien/recherche-fiche.pipe";
import { AddPieceComponent } from "./components/piece/components/add-piece/add-piece.component";
import { EditPieceComponent } from "./components/piece/components/edit-piece/edit-piece.component";
import { ListPieceComponent } from "./components/piece/components/list-piece/list-piece.component";
import { RecherchePiecePipe } from "./components/piece/recherche-piece.pipe";
import { FicheTacheComponent } from "./components/tache/components/fiche-tache/fiche-tache.component";
import { ListTacheComponent } from "./components/tache/components/list-tache/list-tache.component";
import { RechercheTachePipe } from "./components/tache/recherche-tache.pipe";
import { RechercheVehiculePipe } from "../shared/components/vehicule/recherche-vehicule.pipe";
import { ListVehiculeComponent } from "../shared/components/vehicule/list-vehicule/list-vehicule.component";
import { AddEditVehiculeComponent } from "../shared/components/vehicule/add-edit-vehicule/add-edit-vehicule.component";
import { ListeClientComponent } from "../shared/components/client/liste-client/liste-client.component";
import { RechercheClientPipe } from "../shared/components/client/recherche-client.pipe";
import { AddEditClientComponent } from "../shared/components/client/add-edit-client/add-edit-client.component";
import { AddEditDevisComponent } from "../commercial/devis/add-edit-devis/add-edit-devis.component";
import { ListDevisComponent } from "../commercial/devis/list-devis/list-devis.component";
import { RechercheDevisPipe } from "../commercial/devis/recherche-devis.pipe";
import { DetailFactureComponent } from "../commercial/facture/detail-facture/detail-facture.component";
import { ListFactureComponent } from "../commercial/facture/list-facture/list-facture.component";
import { RechercheFacturePipe } from "../commercial/facture/recherche-facture.pipe";




@NgModule({
  declarations: [
    // Tâche
    ListTacheComponent,
    FicheTacheComponent,
    RechercheTachePipe,

    // Fiche entretien
    FicheEntretienComponent,
    RechercheFichePipe,

    // Pièce
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    RecherchePiecePipe,

    // Vehicule
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,

    // Client de TIÉPASBO
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe,

    // Devis
    ListDevisComponent,
    RechercheDevisPipe,
    AddEditDevisComponent,

    // Facture
    ListFactureComponent,
    RechercheFacturePipe,
    DetailFactureComponent,


  ],
  imports: [
    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ChefAtelierRoutingModule,
    MecanicienRoutingModule,
    CommercialRoutingModule


  ],

  exports: [
    // Tâche
    ListTacheComponent,
    FicheTacheComponent,
    RechercheTachePipe,

    // Fiche entretien
    FicheEntretienComponent,
    RechercheFichePipe,

    // Pièce
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    RecherchePiecePipe,

    // Vehicule
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,

    // Client de TIÉPASBO
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe,

    // Devis
    ListDevisComponent,
    RechercheDevisPipe,
    AddEditDevisComponent,

    // Facture
    ListFactureComponent,
    RechercheFacturePipe,
    DetailFactureComponent,
  ],

})
export class SharedModule { }
