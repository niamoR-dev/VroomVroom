import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommercialComponent} from "./components/commercial.component";
import {ListVehiculeComponent} from "../shared/components/vehicule/list-vehicule/list-vehicule.component";
import {AddEditVehiculeComponent} from "../shared/components/vehicule/add-edit-vehicule/add-edit-vehicule.component";
import {ListeClientComponent} from "../shared/components/client/liste-client/liste-client.component";
import {AddEditClientComponent} from "../shared/components/client/add-edit-client/add-edit-client.component";
import {ListDevisComponent} from "./devis/list-devis/list-devis.component";
import {AddEditDevisComponent} from "./devis/add-edit-devis/add-edit-devis.component";
import {ClientResolver} from "./devis/services/client.resolver";
import {VehiculeResolver} from "./devis/services/vehicule.resolver";
import {DevisResolver} from "./devis/services/devis.resolver";
import {ListFactureComponent} from "./facture/list-facture/list-facture.component";
import {FactureResolver} from "./facture/services/facture.resolver";
import {DetailFactureComponent} from "./facture/detail-facture/detail-facture.component";

const routes: Routes = [{
  path: '',
  component: CommercialComponent,
  children: [
    {
      path: 'stock-vehicules',
      component: ListVehiculeComponent
    },
    {
      path: 'stock-vehicules/add',
      component: AddEditVehiculeComponent
    },
    {
      path: 'stock-vehicules/edit/:id',
      component: AddEditVehiculeComponent
    },
    {
      path: 'devis',
      component: ListDevisComponent,
      resolve: {listeDevis: DevisResolver}
    },
    {
      path: 'devis/add',
      component: AddEditDevisComponent,
      resolve: {clients: ClientResolver, vehicules: VehiculeResolver, listeDevis: DevisResolver}
    },
    {
      path: 'devis/edit/:id',
      component: AddEditDevisComponent,
      resolve: {clients: ClientResolver, vehicules: VehiculeResolver, listeDevis: DevisResolver}
    },
    {
      path: 'clients',
      component: ListeClientComponent
    },
    {
      path: 'clients/add',
      component: AddEditClientComponent,
    },
    {
      path: 'clients/edit/:id',
      component: AddEditClientComponent
    },
    {
      path: 'factures',
      component: ListFactureComponent,
      resolve: {listeFactures: FactureResolver}
    },
    {
      path: 'factures/detail/:id',
      component: DetailFactureComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule {
}
