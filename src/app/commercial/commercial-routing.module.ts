import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommercialComponent} from "./components/commercial.component";
import {ListVehiculeComponent} from "../vehicule/list-vehicule/list-vehicule.component";
import {AddEditVehiculeComponent} from "../vehicule/add-edit-vehicule/add-edit-vehicule.component";

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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
