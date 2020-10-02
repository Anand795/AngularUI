import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewProductComponent } from './customer-view-product/customer-view-product.component';

import {MaterialModule} from '../material/material.module'

@NgModule({
  declarations: [CustomerViewProductComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CustomerModule { }
