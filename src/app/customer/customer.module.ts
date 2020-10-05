import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewProductComponent } from './customer-view-product/customer-view-product.component';

import {MaterialModule} from '../material/material.module';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [CustomerViewProductComponent, CartComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CustomerModule { }
