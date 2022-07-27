import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommercialComponent} from "./components/commercial.component";
import {ListVehiculeComponent} from "../vehicule/list-vehicule/list-vehicule.component";
import {AddEditVehiculeComponent} from "../vehicule/add-edit-vehicule/add-edit-vehicule.component";
import {ListeClientComponent} from "../shared/client/liste-client/liste-client.component";
import {AddEditClientComponent} from "../shared/client/add-edit-client/add-edit-client.component";
import {ListDevisComponent} from "./devis/list-devis/list-devis.component";
import {AddEditDevisComponent} from "./devis/add-edit-devis/add-edit-devis.component";

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
      component: ListDevisComponent
    },
    {
      path: 'devis/add',
      component: AddEditDevisComponent
    },
    {
      path: 'devis/edit/:id',
      component: AddEditDevisComponent
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
      path:'clients/edit/:id',
      component: AddEditClientComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
