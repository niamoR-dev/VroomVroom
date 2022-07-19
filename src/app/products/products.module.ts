import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductGetComponent } from './component/product-get/product-get.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent
  ],


  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
