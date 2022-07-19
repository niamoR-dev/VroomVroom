import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductGetComponent } from './component/product-get/product-get.component';
/**
 * On part du chemin relatif : /products
 */
const routes: Routes = [

  {
    path: '',
    component: ProductGetComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

