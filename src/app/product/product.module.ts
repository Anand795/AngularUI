import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { MaterialModule } from '../material/material.module'
import { MatExpansionModule} from '@angular/material/expansion';
import { UpdateProductComponent } from './update-product/update-product.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewProductComponent, AddProductComponent, SelectCategoryComponent, UpdateProductComponent],
  entryComponents:[
    SelectCategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
