import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog'
import { SelectCategoryComponent } from '../select-category/select-category.component';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';

import { Product } from 'src/app/bean/Product';
import { CategoryPro } from 'src/app/bean/CategoryPro'


import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/bean/Category';

import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  category:string;
  product:Product;

  categoryPro = new CategoryPro();

  constructor(public dialog:MatDialog,private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService,private shared:SharedService ) {
    this.product = new Product();
   }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(SelectCategoryComponent);
  }

  addProduct(){
    // this.category = sessionStorage.getItem("check");
    this.product= this.product;
    this.categoryPro.cid = this.shared.getCId();
    console.log(this.categoryPro) 
    
    let responce = this.service.addProduct(this.categoryPro)
    responce.subscribe(data => 
      console.log(data)  
    )
    
  }


}
