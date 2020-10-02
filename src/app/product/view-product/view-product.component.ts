import { AfterViewInit, Component, OnInit , ViewChild} from '@angular/core';
import { Product } from 'src/app/bean/Product';
import { RestapiService } from 'src/app/restapi.service';

import { MatTableDataSource } from '@angular/material/table'
import {MatSort} from '@angular/material/sort'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { Router } from '@angular/router';

// service file to set ID value
import { SharedService } from '../shared/shared.service'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit , AfterViewInit {

  // products:Product[];
  // dataSource:Product[];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  
  constructor(private service:RestapiService,public dialog:MatDialog,private router:Router,private shared:SharedService) {
  }
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

  // // open update dialog 
  // openDialog(){
    
  // }

  // update product 
  updateProduct(id:number){
    this.dialog.open(UpdateProductComponent);
    // this.router.navigate(['viewProduct',id]);
    console.log(id);
    this.shared.setID(id);
  }

  // deleting product 
  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(data => {
      console.log(data)
    })
    window.location.reload();
    
  }
  

}


