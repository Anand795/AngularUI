import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/restapi.service';

import { Report } from '../../bean/Report'

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.css']
})
export class OrderReportComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Report>();
  report:Report[];
  dispatch:string;
  flag:string;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:RestapiService,private router:Router) {
    this.service.getReport().subscribe( res => {
      this.dataSource.data = res as Report[];
      this.report = res as Report[];
     
      this.report.forEach(element => {
        this.flag = element.flag
        console.log(this.flag);
      });
    })
   }

  ngAfterViewInit(): void {
     // for sorting
     this.dataSource.sort = this.sort;
    //  pagination
     this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

  }

  displayedColumns: string[] = ['userName' , 'productName' , 'date' , 'city' , 'state' , 'pincode' , 'mobile' , 'status' , 'dispatch' ];

   // methed for data filter
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
