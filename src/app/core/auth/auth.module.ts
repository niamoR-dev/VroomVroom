import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({

  declarations: [

  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
