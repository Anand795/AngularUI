import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/bean/Product';
import { SharedService } from 'src/app/product/shared/shared.service';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-customer-view-product',
  templateUrl: './customer-view-product.component.html',
  styleUrls: ['./customer-view-product.component.css']
})
export class CustomerViewProductComponent implements OnInit , AfterViewInit {

  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  
  constructor(private service:RestapiService,private router:Router,private shared:SharedService) { }

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
  }

  displayedColumns: string[] = ['productName', 'brand', 'desc', 'price' , 'update' , 'delete'];

  // methed for data filter
  applyFilter(filterValue:String){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
