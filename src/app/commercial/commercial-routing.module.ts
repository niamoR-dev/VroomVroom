import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommercialComponent} from "./components/commercial.component";
import {VehiculeComponent} from "./vehicule/vehicule.component";
import {EditVehiculeComponent} from "./vehicule/edit-vehicule/edit-vehicule.component";

const routes: Routes = [
  {
    path: '',
    component: CommercialComponent,
    children: [
      {
        path: 'vehicules',
        component: VehiculeComponent,
      },
      {
        path: 'vehicules/edit/:id',
        component: EditVehiculeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule {
}
