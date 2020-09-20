import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { Admin } from 'src/app/bean/admin';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm : FormGroup;

  message:any;
 
  admin: Admin

  constructor(private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService ) {
    this.admin= new Admin();
   }

  ngOnInit(): void {

    this.adminLoginForm = this.fb.group({
      
      email:['',[
        Validators.required,
        Validators.email
      ]],
      passwordValidator: ['',[
        Validators.required,
        Validators.minLength(6)
      ]]
    })

  }

  adminLogin(){
    let responce = this.service.adminLogin(this.admin)
    console.log(this.admin.email)
    responce.subscribe(data => 
      console.log(data)  
    )
    responce.subscribe((data) => 
      this.message = data
    )
    this.toastr.info(this.message)
  }

  //Folowing functions are for form valaidations 

  get email(){
    return this.adminLoginForm.get('email');
  }
  get passwordValidator(){
    return this.adminLoginForm.get('passwordValidator');
  }
  get agree(){
    return this.adminLoginForm.get('agree');
  }

}
