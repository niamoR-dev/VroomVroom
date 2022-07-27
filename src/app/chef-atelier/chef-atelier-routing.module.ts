import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChefAtelierComponent } from "./components/chef-atelier.component";
import { FicheEntretienComponent } from "../shared/components/fiche-entretien/components/list-fiche-entretien/fiche-entretien.component";
import { EditPieceComponent } from "../shared/components/piece/components/edit-piece/edit-piece.component";
import { AddPieceComponent } from "../shared/components/piece/components/add-piece/add-piece.component";
import { CreerClientComponent } from './components/clients/creer-client/creer-client.component';
import { ListeClientComponent } from './components/clients/liste-client/liste-client.component';
import { ModifierClientComponent } from './components/clients/modifier-client/modifier-client.component';
import { FicheTacheComponent } from '../shared/components/tache/components/fiche-tache/fiche-tache.component';
import { ListTacheComponent } from '../shared/components/tache/components/list-tache/list-tache.component';
import { ListPieceComponent } from '../shared/components/piece/components/list-piece/list-piece.component';


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
        path: 'liste-taches',
        component: ListTacheComponent
      },
      {
        path: 'gestion-clients/modifier-client/:id',
        component: ModifierClientComponent
      },
      {
        path: 'liste-taches/edit/:id',
        component: FicheTacheComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefAtelierRoutingModule { }
