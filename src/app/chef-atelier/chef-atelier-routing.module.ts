import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { FicheEntretienComponent } from "../fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import { ListPieceComponent } from "../piece/components/list-piece/list-piece.component";
import { EditPieceComponent } from "../piece/components/edit-piece/edit-piece.component";
import { AddPieceComponent } from "../piece/components/add-piece/add-piece.component";
import { CreerClientComponent } from './components/clients/creer-client/creer-client.component';
import { ListeClientComponent } from './components/clients/liste-client/liste-client.component';
import { TacheComponent } from '../tache/components/tache.component';
import { ModifierClientComponent } from './components/clients/modifier-client/modifier-client.component';
import { FicheTacheComponent } from '../tache/components/fiche-tache/fiche-tache.component';


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
        path: 'gestion-clients',
        component: ListeClientComponent
      },
      {
        path: 'gestion-clients/creer-client',
        component: CreerClientComponent
      },
      {
        path: 'gestion-clients/modifier-client/:id',
        component: ModifierClientComponent
      },
      {
        path: 'fiche-tache',
        component: FicheTacheComponent
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
