import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChefAtelierComponent} from "./components/chef-atelier.component";
import {FicheEntretienComponent} from "../fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import {ListPieceComponent} from "../piece/components/list-piece/list-piece.component";
import {EditPieceComponent} from "../piece/components/edit-piece/edit-piece.component";

const routes: Routes = [
  {
    path: '',
    component: ChefAtelierComponent,
    children: [
      {
        path: 'fiches-entretien',
        component: FicheEntretienComponent
      },
      {
        path: 'stock-pieces',
        component: ListPieceComponent
      },
      {
        path: 'stock-pieces/edit/:id',
        component: EditPieceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefAtelierRoutingModule { }
