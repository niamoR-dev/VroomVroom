import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefAtelierRoutingModule } from './chef-atelier-routing.module';
import { HeaderComponent } from "./components/header/header.component";
import { FicheEntretienComponent } from "../fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { ListPieceComponent } from "../piece/components/list-piece/list-piece.component";
import { EditPieceComponent } from "../piece/components/edit-piece/edit-piece.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPieceComponent } from "../piece/components/add-piece/add-piece.component";
import { CreerClientComponent } from './components/clients/creer-client/creer-client.component';
import { ListeClientComponent } from './components/clients/liste-client/liste-client.component';
import { RecherchePiecePipe } from "../piece/recherche-piece.pipe";
import { RechercheFichePipe } from "../fiche-entretien/recherche-fiche.pipe";
import { ModifierClientComponent } from './components/clients/modifier-client/modifier-client.component';
import { FicheTacheComponent } from '../tache/components/fiche-tache/fiche-tache.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FicheEntretienComponent,
    ChefAtelierComponent,
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent,
    CreerClientComponent,
    RecherchePiecePipe,
    RechercheFichePipe,
    ListeClientComponent,
    ModifierClientComponent,
    FicheTacheComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChefAtelierRoutingModule,
    FormsModule
  ]
})
export class ChefAtelierModule { }
