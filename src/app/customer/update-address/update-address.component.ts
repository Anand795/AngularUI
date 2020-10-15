import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/bean/Address';
import { RestapiService } from 'src/app/restapi.service';
import { SharedService } from '../custshared/customerShared.service'


@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  address:Address;
  addressId:Number;

  constructor(private service:RestapiService,private shared:SharedService,private toastr:ToastrService) {
   
  }

  ngOnInit(): void {

    // this.id = this.shared.getId();
    // console.log(this.id);
    this.addressId = this.shared.getAddressId()
    this.service.getAddressById(this.addressId).subscribe(data=>{
      this.address = new Address();  
      this.address = data;
      console.log(this.address)
    })
  }

  public updateAddress(){
    let responce = this.service.updateAddress(this.address, this.addressId)
    responce.subscribe(data => {
      this.toastr.success(data.toString())
      }
    )
    window.location.reload();
  }

}
