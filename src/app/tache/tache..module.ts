import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TacheComponent } from './components/tache.component';
import { TacheRoutingModule } from './tache.module';


@NgModule({
  declarations: [
    TacheComponent
  ],
  imports: [
    CommonModule,
    TacheRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TacheModule { }
