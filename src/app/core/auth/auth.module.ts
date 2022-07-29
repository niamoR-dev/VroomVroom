import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthHeaderComponent } from "./header/auth-header.component";
import { AuthComponent } from "./component/auth.component";



@NgModule({

  declarations: [
    AuthComponent,
    AuthHeaderComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
