import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog'
import { SelectCategoryComponent } from '../select-category/select-category.component';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';

import { Product } from 'src/app/bean/Product';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product:Product;
  constructor(public dialog:MatDialog,private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService  ) {
    this.product = new Product();
   }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(SelectCategoryComponent);
  }

  addProduct(){
    let responce = this.service.addProduct(this.product)
    console.log(this.product.brand)
    responce.subscribe(data => 
      console.log(data)  
    )
  }


}
