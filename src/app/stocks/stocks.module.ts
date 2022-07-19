import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StockGetComponent } from './components/stock-get/stock-get.component';
import { StockAddComponent } from './components/stock-add/stock-add.component';
import { StockEditComponent } from './components/stock-edit/stock-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StockGetComponent,
    StockAddComponent,
    StockEditComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StocksModule { }
