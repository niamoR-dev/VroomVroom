import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialHeaderComponent } from './header/commercial-header.component';
import { CommercialComponent } from './components/commercial.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddEditVehiculeComponent } from "../shared/components/vehicule/add-edit-vehicule/add-edit-vehicule.component";
import { RouterModule } from "@angular/router";
import { ListeClientComponent } from "../shared/components/client/liste-client/liste-client.component";
import { RechercheClientPipe } from "../shared/components/client/recherche-client.pipe";
import { AddEditClientComponent } from "../shared/components/client/add-edit-client/add-edit-client.component";
import { ListDevisComponent } from "./devis/list-devis/list-devis.component";
import { RechercheDevisPipe } from "./devis/recherche-devis.pipe";
import { AddEditDevisComponent } from './devis/add-edit-devis/add-edit-devis.component';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { RechercheFacturePipe } from './facture/recherche-facture.pipe';
import { DetailFactureComponent } from './facture/detail-facture/detail-facture.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CommercialHeaderComponent,
    CommercialComponent,

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
    ReactiveFormsModule,
    CommercialRoutingModule,
    SharedModule
  ]
})
export class CommercialModule { }
