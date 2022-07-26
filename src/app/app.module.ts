import {CommonModule, registerLocaleData} from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import localeFr from '@angular/common/locales/fr';
import { ListTacheComponent } from './tache/components/list-tache/list-tache.component';

// For date language pipe
registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent
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
