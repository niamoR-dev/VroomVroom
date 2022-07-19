import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockAddComponent } from './components/stock-add/stock-add.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';
import { StockGetComponent } from './components/stock-get/stock-get.component';


const routes: Routes = [

  {
    path: '',
    component: StockGetComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: StockAddComponent,
  },
  {
    path: 'edit/:id',
    component: StockEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
