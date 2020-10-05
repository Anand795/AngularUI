import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignUpComponent } from './user/user-sign-up/user-sign-up.component';
import {HomeComponent} from './home/home.component'

import { AdminRegisterComponent } from './admin-check/admin-register/admin-register.component'
import { AdminLoginComponent } from './admin-check/admin-login/admin-login.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { CustomerViewProductComponent } from './customer/customer-view-product/customer-view-product.component'
import { CartComponent } from './customer/cart/cart.component';

const routes: Routes = [

  // user component
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userSignUp",
    component:UserSignUpComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  // Admin component
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"adminSignUp",
    component:AdminRegisterComponent
  },
  // View Product
  {
    path:"viewProduct",
    component:ViewProductComponent
  },
  {
    path:"addProduct",
    component:AddProductComponent

  },
  // to update product
  {
    path:"update/:id",
    component:UpdateProductComponent
  },
  // view product by customer
  {
    path:"cview",
    component:CustomerViewProductComponent
  },
  {
    path:"cart",
    component:CartComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
