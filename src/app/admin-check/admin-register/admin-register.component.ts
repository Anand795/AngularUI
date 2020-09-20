import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../../bean/admin';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
 
export class AdminRegisterComponent implements OnInit {

 
  registerForm : FormGroup;

  admin:Admin;
  message:any;

  constructor(private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService) {
    this.admin = new Admin();
   }



  ngOnInit(): void {
    this.registerForm = this.fb.group({
      adminnameValidator:['',[
        Validators.required,
      ]],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      passwordValidator: ['',[
        Validators.required,
        Validators.minLength(6)
      ]],
      mobile:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]]
    })

  }


  //Folowing functions are for form valaidations 
  get adminnameValidator(){
    return this.registerForm.get('email');
  }
  get email(){
    return this.registerForm.get('email');
  }
  
  get passwordValidator(){
    return this.registerForm.get('passwordValidator');
  }
  get mobile(){
    return this.registerForm.get('mobile');
  }

  public registerNow(){
    let responce = this.service.adminRegister(this.admin);
    responce.subscribe((data) => this.message = data);
    this.toastr.info(this.message)  
  }

}
