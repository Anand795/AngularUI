import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { RestapiService } from 'src/app/restapi.service';
import { Address } from '../../bean/Address'
import { AddNewAddressComponent } from '../add-new-address/add-new-address.component';
import { UpdateAddressComponent } from '../update-address/update-address.component';
import { SharedService } from '../custshared/customerShared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit   , AfterViewInit {

  selectValue:number;
  

  dataSource = new MatTableDataSource<Address>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 

  constructor(private service:RestapiService , private toastr:ToastrService,private dialog:MatDialog,private shared:SharedService,private router:Router) { }

  ngAfterViewInit(): void {
     // for sorting
     this.dataSource.sort = this.sort;
    //  pagination
     this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

    this.service.getAddress(sessionStorage.getItem("uid")).subscribe( res => {
      this.dataSource.data = res as Address[];
      console.log(res);
      this.selectValue = 0;
    })
  }

  
  displayedColumns: string[] = ['name' , 'houseNo' , 'area' , 'city' , 'state' , 'pincode' , 'mobile', 'update' , 'select'];

  select(id:number){
    this.selectValue = id;
    this.toastr.success("Selected")
    this.shared.setSelectedAddress(id);
    
  }

  public updateAddress(id:number){
    console.log(id)
    this.shared.setAddressId(id);
    this.dialog.open(UpdateAddressComponent);
  }

  public openDialog(){
    this.dialog.open(AddNewAddressComponent)
  }

  public placeOrder(){
    let responce = this.service.placeOrder(sessionStorage.getItem("uid"),this.shared.getSelectedAddress())
    responce.subscribe(data => {
      this.toastr.success(data.toString())
      this.router.navigate(['home']).then(function(){
        window.location.reload();
      })
    })
  }

}
