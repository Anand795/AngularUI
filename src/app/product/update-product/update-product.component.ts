import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  pro:Product = new Product();
  constructor(private service:RestapiService,private route:ActivatedRoute,private shared:SharedService) { 
   
  }

  ngOnInit(): void {
    this.id = this.shared.getId();
    console.log(this.id);
    this.service.getProductById(this.id).subscribe(data=>{
      this.pro = data;
      console.log(this.pro);
    })
  }
  

}
