import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialModule } from '../material/material.module';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component'

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignUpComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    UserLoginComponent,
    UserSignUpComponent
  ]
})
export class UserModule {
  
 }
