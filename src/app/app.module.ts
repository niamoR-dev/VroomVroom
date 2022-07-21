import {CommonModule, registerLocaleData} from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import localeFr from '@angular/common/locales/fr';
import { FicheEntretienComponent } from './fiche-entretien/components/fiche-entretien.component';
import { ChefAtelierComponent } from './chef-atelier/components/chef-atelier.component';
import { HeaderComponent } from './chef-atelier/components/header/header.component';

// For date language pipe
registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    FicheEntretienComponent,
    ChefAtelierComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR',
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
