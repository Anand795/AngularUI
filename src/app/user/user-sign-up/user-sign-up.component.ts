import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/restapi.service';
import {FormBuilder , FormGroup , Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../bean/User'

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  myForm : FormGroup;

  user:User
  message:any;

  constructor(private service:RestapiService,private fb : FormBuilder ,private toastr:ToastrService) { 
    this.user = new User();
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      usernameValidator:['',[
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
  get usernameValidator(){
    return this.myForm.get('email');
  }
  get email(){
    return this.myForm.get('email');
  }
  
  get passwordValidator(){
    return this.myForm.get('passwordValidator');
  }
  get mobile(){
    return this.myForm.get('mobile');
  }

  public registerNow(){
    let responce = this.service.userSignUp(this.user);
    responce.subscribe((data) => this.message = data);
    this.toastr.info(this.message)  
  }

}
