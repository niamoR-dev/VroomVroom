import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChefAtelierComponent} from "./components/chef-atelier.component";
import {FicheEntretienComponent} from "../fiche-entretien/components/fiche-entretien.component";

const routes: Routes = [
  {
    path: '',
    component: ChefAtelierComponent,
    children: [
      {
        path: 'fiches-entretien',
        component: FicheEntretienComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefAtelierRoutingModule { }
