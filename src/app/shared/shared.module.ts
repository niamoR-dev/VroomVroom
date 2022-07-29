import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FicheTacheComponent } from './components/tache/components/fiche-tache/fiche-tache.component';
import { ListTacheComponent } from './components/tache/components/list-tache/list-tache.component';
import { RechercheFichePipe } from './components/fiche-entretien/recherche-fiche.pipe';
import { ListeFichesEntretienComponent } from './components/fiche-entretien/components/list-fiche-entretien/liste-fiches-entretien.component';
import { FicheEntretienComponent } from './components/fiche-entretien/components/modifier-fiche-entretien/fiche-entretien.component';
import { RechercheTachePipe } from './components/tache/recherche-tache.pipe';


@NgModule({
  declarations: [
    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,
    FicheEntretienComponent,
    ListeFichesEntretienComponent,
    RechercheFichePipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports: [

    FicheTacheComponent,
    ListTacheComponent,
    RechercheTachePipe,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FicheEntretienComponent,
    RechercheFichePipe
  ],

})
export class SharedModule { }
