import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FicheTacheComponent } from './components/tache/components/fiche-tache/fiche-tache.component';
import { ListTacheComponent } from './components/tache/components/list-tache/list-tache.component';
import { RechercheFichePipe } from './components/fiche-entretien/recherche-fiche.pipe';
import { ListeFichesEntretienComponent } from './components/fiche-entretien/components/list-fiche-entretien/liste-fiches-entretien.component';
import { FicheEntretienComponent } from './components/fiche-entretien/components/modifier-fiche-entretien/fiche-entretien.component';
import { RechercheTachePipe } from './components/tache/recherche-tache.pipe';
import { AddEditDevisComponent } from '../commercial/devis/add-edit-devis/add-edit-devis.component';
import { ListDevisComponent } from '../commercial/devis/list-devis/list-devis.component';
import { RechercheDevisPipe } from '../commercial/devis/recherche-devis.pipe';
import { DetailFactureComponent } from '../commercial/facture/detail-facture/detail-facture.component';
import { ListFactureComponent } from '../commercial/facture/list-facture/list-facture.component';
import { RechercheFacturePipe } from '../commercial/facture/recherche-facture.pipe';
import { AddEditClientComponent } from './components/client/add-edit-client/add-edit-client.component';
import { ListeClientComponent } from './components/client/liste-client/liste-client.component';
import { RechercheClientPipe } from './components/client/recherche-client.pipe';
import { AddEditVehiculeComponent } from './components/vehicule/add-edit-vehicule/add-edit-vehicule.component';
import { ListVehiculeComponent } from './components/vehicule/list-vehicule/list-vehicule.component';
import { RechercheVehiculePipe } from './components/vehicule/recherche-vehicule.pipe';
import { AddPieceComponent } from './components/piece/components/add-piece/add-piece.component';
import { EditPieceComponent } from './components/piece/components/edit-piece/edit-piece.component';
import { ListPieceComponent } from './components/piece/components/list-piece/list-piece.component';
import { RecherchePiecePipe } from './components/piece/recherche-piece.pipe';


@NgModule({
  declarations: [

    //Tâches
    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,
    //Fiches
    FicheEntretienComponent,
    ListeFichesEntretienComponent,
    RechercheFichePipe,
    //Véhicules
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,

    //Clients
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe,

    //Devis
    ListDevisComponent,
    RechercheDevisPipe,
    AddEditDevisComponent,
    //Factures
    ListFactureComponent,
    RechercheFacturePipe,
    DetailFactureComponent,

    //Pièces
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    RecherchePiecePipe,
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports: [

    //Tâches
    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,

    //Fiches
    FicheEntretienComponent,
    ListeFichesEntretienComponent,
    RechercheFichePipe,

    //Véhicules
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,

    //Clients
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe,

    //Devis
    ListDevisComponent,
    RechercheDevisPipe,
    AddEditDevisComponent,

    //Factures
    ListFactureComponent,
    RechercheFacturePipe,
    DetailFactureComponent,

    //Pièces
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    RecherchePiecePipe,

    //Modules
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],

})
export class SharedModule { }
