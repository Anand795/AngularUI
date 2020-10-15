import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewProductComponent } from './customer-view-product/customer-view-product.component';

import {MaterialModule} from '../material/material.module';
import { CartComponent } from './cart/cart.component'

import { RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [CustomerViewProductComponent, CartComponent, AddressComponent, AddNewAddressComponent, UpdateAddressComponent, CustomerReportComponent, WishlistComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RouterModule
  ]
})
export class CustomerModule { }
