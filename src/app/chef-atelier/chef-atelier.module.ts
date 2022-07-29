import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChefAtelierRoutingModule } from './chef-atelier-routing.module';
import { HeaderComponent } from "./components/header/header.component";
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreerClientComponent } from './components/clients/creer-client/creer-client.component';
import { ListeClientComponent } from './components/clients/liste-client/liste-client.component';
import { ModifierClientComponent } from './components/clients/modifier-client/modifier-client.component';
import { RechercheClientPipe } from './components/clients/recherche-client.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    ChefAtelierComponent,

    // Client Romain
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
    RouterModule,
  ]
})
export class ChefAtelierModule { }
