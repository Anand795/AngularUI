import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import {MaterialModule} from '../material/material.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { OrderReportComponent } from './order-report/order-report.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: 
  [
    AdminRegisterComponent,
    AdminLoginComponent,
    OrderReportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class AdminCheckModule {
  
 }
