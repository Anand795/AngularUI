import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Report } from 'src/app/bean/Report';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})
export class CustomerReportComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Report>();
  report:Report[];
  dispatch:string;
  flag:string;

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:RestapiService,private router:Router) { }
  ngAfterViewInit(): void {
     // for sorting
     this.dataSource.sort = this.sort;
    //  pagination
     this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {

    this.service.getCustomerReport(sessionStorage.getItem("uid")).subscribe( res => {
      this.dataSource.data = res as Report[];
      this.report = res as Report[];
     
      this.report.forEach(element => {
        this.flag = element.flag
        console.log(this.flag);
      });
    })
  }

  displayedColumns: string[] = ['userName' , 'productName' , 'date' , 'city' , 'state' , 'pincode' , 'mobile' , 'status'];

  applyFilter(filterValue:String){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  public updateFlag(id:number){
    let responce = this.service.updateFlag(id);
    responce.subscribe((data) =>{
      console.log(data);
      window.location.reload();
    })

  }
}
