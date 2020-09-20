import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { User } from 'src/app/bean/User';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  myForm : FormGroup;

  message:any;
 
  user:User

  constructor(private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService ) {
    this.user= new User();
   }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      
      email:['',[
        Validators.required,
        Validators.email
      ]],
      passwordValidator: ['',[
        Validators.required,
        Validators.minLength(6)
      ]]
    })

    this.myForm.valueChanges.subscribe(console.log)

  }
  userLogin(){
    let responce = this.service.userLogin(this.user)
    console.log(this.user.email)
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
    return this.myForm.get('email');
  }
  get passwordValidator(){
    return this.myForm.get('passwordValidator');
  }
  get agree(){
    return this.myForm.get('agree');
  }

 openToast(){
  this.toastr.info(this.message)
 }

}
