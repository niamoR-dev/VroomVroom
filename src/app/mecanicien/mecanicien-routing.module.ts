import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListTacheComponent } from '../shared/components/tache/components/list-tache/list-tache.component';
import { TestComponent } from './components/test/test.component';
import { Mecanicien2Component } from './mecanicien2/mecanicien2.component';

const routes: Routes = [{
  path: '',
  component: Mecanicien2Component,
  children: [
    {
      path: 'liste-taches-disponibles',
      component: ListTacheComponent,
    },
    {
      path: 'taches-selectionnees',
      component: ListTacheComponent,
    }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MecanicienRoutingModule { }
