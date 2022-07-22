import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { FicheEntretienComponent } from "../fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import { ListPieceComponent } from "../piece/components/list-piece/list-piece.component";
import { EditPieceComponent } from "../piece/components/edit-piece/edit-piece.component";
import { AddPieceComponent } from "../piece/components/add-piece/add-piece.component";
=======
import {ListPieceComponent} from "../piece/components/list-piece/list-piece.component";
import {ChefAtelierComponent} from "./components/chef-atelier.component";
import {FicheEntretienComponent} from "../fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import {EditPieceComponent} from "../piece/components/edit-piece/edit-piece.component";
import {AddPieceComponent} from "../piece/components/add-piece/add-piece.component";
import { CreerClientComponent } from './components/creer-client/creer-client.component';
import { TacheComponent } from '../tache/components/tache.component';
>>>>>>> GMA-page_create_client

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
      },
      {
        path: 'stock-pieces/add',
        component: AddPieceComponent
      },
      {
        path: 'creer-client',
        component: CreerClientComponent
      },
      {
        path: 'tache',
        component: TacheComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefAtelierRoutingModule { }
