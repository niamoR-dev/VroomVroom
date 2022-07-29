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
import { CreerClientComponent } from '../chef-atelier/components/clients/creer-client/creer-client.component';
import { ModifierClientComponent } from '../chef-atelier/components/clients/modifier-client/modifier-client.component';
import { ListeClientComponent } from './components/client/liste-client/liste-client.component';
import { RechercheClientPipe } from './components/client/recherche-client.pipe';
import { AddPieceComponent } from './components/piece/components/add-piece/add-piece.component';
import { EditPieceComponent } from './components/piece/components/edit-piece/edit-piece.component';
import { ListPieceComponent } from './components/piece/components/list-piece/list-piece.component';
import { RecherchePiecePipe } from './components/piece/recherche-piece.pipe';
import { AddEditDevisComponent } from '../commercial/devis/add-edit-devis/add-edit-devis.component';
import { ListDevisComponent } from '../commercial/devis/list-devis/list-devis.component';
import { RechercheDevisPipe } from '../commercial/devis/recherche-devis.pipe';
import { DetailFactureComponent } from '../commercial/facture/detail-facture/detail-facture.component';
import { ListFactureComponent } from '../commercial/facture/list-facture/list-facture.component';
import { RechercheFacturePipe } from '../commercial/facture/recherche-facture.pipe';
import { AddEditClientComponent } from './components/client/add-edit-client/add-edit-client.component';
import { AddEditVehiculeComponent } from './components/vehicule/add-edit-vehicule/add-edit-vehicule.component';
import { ListVehiculeComponent } from './components/vehicule/list-vehicule/list-vehicule.component';
import { RechercheVehiculePipe } from './components/vehicule/recherche-vehicule.pipe';


@NgModule({
  declarations: [
    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,
    FicheEntretienComponent,
    ListeFichesEntretienComponent,
    RechercheFichePipe,
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    RecherchePiecePipe,
    ListeClientComponent,
    ModifierClientComponent,
    RechercheClientPipe,
    CreerClientComponent,
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe,
    ListDevisComponent,
    RechercheDevisPipe,
    AddEditDevisComponent,
    ListFactureComponent,
    RechercheFacturePipe,
    DetailFactureComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports: [
    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,
    FicheEntretienComponent,
    ListeFichesEntretienComponent,
    RechercheFichePipe,
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    RecherchePiecePipe,
    ListeClientComponent,
    ModifierClientComponent,
    RechercheClientPipe,
    CreerClientComponent,
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe,
    ListDevisComponent,
    RechercheDevisPipe,
    AddEditDevisComponent,
    ListFactureComponent,
    RechercheFacturePipe,
    DetailFactureComponent
  ],

})
export class SharedModule { }
