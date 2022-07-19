import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'products',
  //   loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  // },
  // {
  //   path: 'stocks',
  //   loadChildren: () => import('../stocks/stocks.module').then(m => m.StocksModule)
  // },
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
export class CoreRoutingModule { }
