import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/bean/Cart';
import { Product } from 'src/app/bean/Product';
import { SharedService } from 'src/app/product/shared/shared.service';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-customer-view-product',
  templateUrl: './customer-view-product.component.html',
  styleUrls: ['./customer-view-product.component.css']
})
export class CustomerViewProductComponent implements OnInit , AfterViewInit {

  badge:string;
  cart = new Cart();
  uid:string;

  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  
  constructor(private service:RestapiService,private router:Router,private shared:SharedService,private toastr:ToastrService) { }

  ngAfterViewInit(): void {
     // for sorting
     this.dataSource.sort = this.sort;
    //  pagination
     this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.service.getProductList().subscribe( res => {
      this.dataSource.data = res as Product[];
    })

    // subscriber to get cart badge value 
    this.service.getBadge(sessionStorage.getItem("uid")).subscribe(data => {
      this.badge = data.toString();
      console.log("bad"+data)
    })
  }

  displayedColumns: string[] = ['productName', 'brand', 'desc', 'price' , 'update' , 'delete'];

  // methed for data filter
  applyFilter(filterValue:String){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  
  addToCart(pid:number){
    this.uid = sessionStorage.getItem("uid");
    this.cart.productId=pid;
    
    let responce = this.service.addToCart(this.uid, pid);
    responce.subscribe(data => {
      this.toastr.success(data.toString())
      console.log(data)
      }
    )
      window.location.reload();
  }

  // adding to wishList
  addToWishlist(pid:number){
    console.log(sessionStorage.getItem("uid"));
    console.log(pid);
    this.uid = sessionStorage.getItem("uid");
    this.cart.productId=pid;
    
    let responce = this.service.addToWishlist(this.uid, pid);
    responce.subscribe(data => {
      this.toastr.success(data.toString())
      console.log(data)
      }
    )
      window.location.reload();
  }

}
