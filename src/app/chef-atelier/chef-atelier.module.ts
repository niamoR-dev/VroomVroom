import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefAtelierRoutingModule } from './chef-atelier-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {FicheEntretienComponent} from "../fiche-entretien/components/fiche-entretien.component";
import {ChefAtelierComponent} from "./components/chef-atelier.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FicheEntretienComponent,
    ChefAtelierComponent
  ],
  imports: [
    CommonModule,
    ChefAtelierRoutingModule
  ]
})
export class ChefAtelierModule { }
