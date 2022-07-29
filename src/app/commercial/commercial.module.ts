import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialHeaderComponent } from './header/commercial-header.component';
import { CommercialComponent } from './components/commercial.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CommercialHeaderComponent,
    CommercialComponent,
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CommercialModule { }
