import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/bean/Product';
import { SharedService } from 'src/app/product/shared/shared.service';
import { RestapiService } from 'src/app/restapi.service';
import { Cart } from '../../bean/Cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  , AfterViewInit{
  
  badge: string;

  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  
  constructor(private service:RestapiService,private router:Router,private shared:SharedService,private toastr:ToastrService) {
    
  }
  ngAfterViewInit(): void {
     // for sorting
     this.dataSource.sort = this.sort;
    //  pagination
     this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.service.getCartList(sessionStorage.getItem("uid")).subscribe( res => {
      this.dataSource.data = res as Product[];
    })

    // subscriber to get badge value 
    this.service.getBadge(sessionStorage.getItem("uid")).subscribe(data => {
      this.badge = data.toString();
      console.log("bad"+data)
    })
  }
  displayedColumns: string[] = ['productName', 'brand', 'desc', 'price'];

   // methed for data filter
   applyFilter(filterValue:String){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
