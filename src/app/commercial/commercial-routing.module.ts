import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommercialComponent} from "./components/commercial.component";

const routes: Routes = [
  {
    path: '',
    component: CommercialComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule {
}
