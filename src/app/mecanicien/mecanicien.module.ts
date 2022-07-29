import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RechercheTachePipe } from '../shared/components/tache/recherche-tache.pipe';
import { MecanicienHeaderComponent } from './components/header/mecanicien-header.component';
import {RouterModule} from "@angular/router";
import { MecanicienRoutingModule } from './mecanicien-routing.module';
import { TestComponent } from './components/test/test.component';
import { Mecanicien2Component } from './mecanicien2/mecanicien2.component';
import { ListTacheComponent } from '../shared/components/tache/components/list-tache/list-tache.component';
import { ChefAtelierModule } from '../chef-atelier/chef-atelier.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MecanicienHeaderComponent,
    TestComponent,
    Mecanicien2Component,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MecanicienRoutingModule,
    FormsModule,
    SharedModule

  ]
})
export class MecanicienModule { }
