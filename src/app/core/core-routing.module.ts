import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/component/auth.component";
import {AuthGuard} from "./auth/services/auth.guard";
import {Roles} from "./auth/enum/role";

const routes: Routes = [

  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'chefAtelier',
    canActivate: [AuthGuard],
    data: {
      ROLE: [Roles.CHEF_ATELIER, Roles.ADMIN]
    },
    loadChildren: () => import('../chef-atelier/chef-atelier.module').then(m => m.ChefAtelierModule)
  },
  {
    path: 'mecanicien',
    canActivate: [AuthGuard],
    data: {
      ROLE: [Roles.MECANICIEN, Roles.ADMIN]
    },
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'commercial',
    canActivate: [AuthGuard],
    data: {
      ROLE: [Roles.COMMERCIAL, Roles.ADMIN]
    },
    loadChildren: () => import('../commercial/commercial.module').then(m => m.CommercialModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
