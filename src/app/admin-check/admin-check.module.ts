import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import {MaterialModule} from '../material/material.module';
import { AdminLoginComponent } from './admin-login/admin-login.component'

@NgModule({
  declarations: 
  [
    AdminRegisterComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AdminCheckModule {
  
 }
