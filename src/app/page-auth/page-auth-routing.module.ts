import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAuthComponent } from './component/page-auth.component';
/**
 * On part du chemin relatif : /products
 */
const routes: Routes = [

  {
    path: '',
    component: PageAuthComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAuthRoutingModule { }

