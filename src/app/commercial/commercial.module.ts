import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialHeaderComponent } from './header/commercial-header.component';
import { CommercialComponent } from './components/commercial.component';
import {RechercheVehiculePipe} from "../vehicule/recherche-vehicule.pipe";
import {ListVehiculeComponent} from "../vehicule/list-vehicule/list-vehicule.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddEditVehiculeComponent} from "../vehicule/add-edit-vehicule/add-edit-vehicule.component";
import {RouterModule} from "@angular/router";
import {ListeClientComponent} from "../shared/client/liste-client/liste-client.component";
import {RechercheClientPipe} from "../shared/client/recherche-client.pipe";
import {AddEditClientComponent} from "../shared/client/add-edit-client/add-edit-client.component";


@NgModule({
  declarations: [
    CommercialHeaderComponent,
    CommercialComponent,
    RechercheVehiculePipe,
    ListVehiculeComponent,
    AddEditVehiculeComponent,
    ListeClientComponent,
    AddEditClientComponent,
    RechercheClientPipe
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommercialModule { }
