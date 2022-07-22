import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefAtelierRoutingModule } from './chef-atelier-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {FicheEntretienComponent} from "../fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import {ChefAtelierComponent} from "./components/chef-atelier.component";
import {ListPieceComponent} from "../piece/components/list-piece/list-piece.component";
import {EditPieceComponent} from "../piece/components/edit-piece/edit-piece.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AddPieceComponent} from "../piece/components/add-piece/add-piece.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FicheEntretienComponent,
    ChefAtelierComponent,
    ListPieceComponent,
    EditPieceComponent,
    AddPieceComponent
  ],
  imports: [
    CommonModule,
    ChefAtelierRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ChefAtelierModule { }
