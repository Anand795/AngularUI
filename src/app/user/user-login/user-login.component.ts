import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { User } from 'src/app/bean/User';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  myForm : FormGroup;

  message:any;
  session:string;
  user:User

  constructor(private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService , private router:Router ) {
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
    responce.subscribe((data) => {

      this.message = data 
      if(this.message != null){
        if(this.message.email == this.user.email){
          sessionStorage.setItem("role" , "USER");
          sessionStorage.setItem("name" , this.message.username)
          sessionStorage.setItem("uid" , this.message.userID)
          // console.log(sessionStorage.getItem("role"))
          this.router.navigate(['home']).then(function(){
            window.location.reload();
          })
          this.toastr.success("Login Successfull")
        }
      }
      else{
        this.toastr.error("Login Failed")
      }
    })
    
    
  
    
    // console.log(this.session);
    
    

    // if (this.session.equals("Successfull")) {
    //   sessionStorage.setItem("role" , "USER");
    //   console.log(sessionStorage.getItem("role"))
    // }


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

 
}
