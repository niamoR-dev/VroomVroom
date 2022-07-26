
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import {AuthComponent} from "./auth/component/auth.component";


@NgModule({
  declarations: [
    HeaderComponent,
    AuthComponent
  ],

  imports: [
    CoreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    CommonModule
  ],

  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    HeaderComponent,
  ]
})
export class CoreModule {


  /*
     Permet de placer le CoreModule en parent de tous les autres modules, si un autre module est

     importé dans le appModule l'application rentrera en conflit (mesure de sécurité)
  */

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {

      throw new Error('CoreModule is already loaded.');

    }

  }

}
