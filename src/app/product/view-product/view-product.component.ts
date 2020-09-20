import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import { Product } from '../../bean/Product'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  produts:Product[];
  constructor(private service:RestapiService) { }

  ngOnInit(): void {

    this.service.getProductList().subscribe( data => {
      this.produts = data;
    })
  }

}
