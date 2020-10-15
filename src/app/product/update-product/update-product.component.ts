import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/bean/Product';
import { RestapiService } from 'src/app/restapi.service';
import { SharedService } from '../shared/shared.service'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:number;
  pro:Product;
  pName:String;
  constructor(private service:RestapiService,private router:Router,private shared:SharedService , private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.pro = new Product();
    this.id = this.shared.getId();
    // console.log(this.id);
    this.service.getProductById(this.id).subscribe(data=>{
      this.pro = data;
      console.log(this.pro)
    })
  }

  update(){
    let responce = this.service.updateProduct(this.pro , this.id)
    responce.subscribe(data => {
      window.location.reload()
      this.toastr.success(data.toString())
      }
    )
  }
  
  

}
