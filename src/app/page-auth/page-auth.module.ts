import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAuthComponent } from './component/page-auth.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({

  declarations: [
    PageAuthComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class PageAuthModule { }
