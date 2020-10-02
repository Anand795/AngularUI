import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { Admin } from 'src/app/bean/admin';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm : FormGroup;

  message:any;
 
  admin: Admin

  constructor(private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService  , private router:Router) {
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
    responce.subscribe(data => 
      console.log(data)  
    )
    responce.subscribe((data) => {

      this.message = data 
      
      
      // console.log(this.message.email)
      // setting session'
      if(this.message != null){
        if(this.message.email == this.admin.email){
          sessionStorage.setItem("role" , "ADMIN");
          sessionStorage.setItem("name" , this.message.username)
          // console.log(sessionStorage.getItem("role"))
          this.router.navigate(['viewProduct']).then(function(){
            window.location.reload();
          })
          this.toastr.success("Login Successfull")
        }
      }
      else{
        this.toastr.error("Login Failed")
      }
      
    })
    
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
