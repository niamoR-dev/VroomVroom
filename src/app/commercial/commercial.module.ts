import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { VehiculeComponent } from './vehicule/vehicule.component';
import {CommercialComponent} from "./components/commercial.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CommercialComponent,
    VehiculeComponent
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CommercialModule { }
