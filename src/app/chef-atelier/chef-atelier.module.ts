import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefAtelierRoutingModule } from './chef-atelier-routing.module';
import { HeaderComponent } from "./components/header/header.component";
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { ListPieceComponent } from "../shared/components/piece/components/list-piece/list-piece.component";
import { EditPieceComponent } from "../shared/components/piece/components/edit-piece/edit-piece.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddPieceComponent } from "../shared/components/piece/components/add-piece/add-piece.component";
import { CreerClientComponent } from './components/clients/creer-client/creer-client.component';
import { ListeClientComponent } from './components/clients/liste-client/liste-client.component';
import { RecherchePiecePipe } from "../shared/components/piece/recherche-piece.pipe";
import { ModifierClientComponent } from './components/clients/modifier-client/modifier-client.component';
import { FicheTacheComponent } from '../shared/components/tache/components/fiche-tache/fiche-tache.component';
import { RechercheTachePipe } from '../shared/components/tache/recherche-tache.pipe';
import { RechercheClientPipe } from './components/clients/recherche-client.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    ChefAtelierComponent,
    // Client
    ListeClientComponent,
    ModifierClientComponent,
    RechercheClientPipe,
    CreerClientComponent,


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChefAtelierRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ChefAtelierModule { }
