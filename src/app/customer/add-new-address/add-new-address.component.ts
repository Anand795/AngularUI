import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/bean/Address';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {

  address:Address;

  constructor(private service:RestapiService, private toastr:ToastrService) {
    this.address = new Address();
  }

  ngOnInit(): void {
  }

  public addAddress(){
    console.log("clicked");
    let responce = this.service.addNewAddress(sessionStorage.getItem("uid"),this.address);
    responce.subscribe( data => {
      console.log(data);
      this.toastr.success(data.toString());
    })
    window.location.reload
  }

}
