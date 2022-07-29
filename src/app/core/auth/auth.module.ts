import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AuthComponent } from './component/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthHeaderComponent } from './header/auth-header.component';



@NgModule({

  declarations: [
    AuthComponent,
    AuthHeaderComponent
  ],

  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
