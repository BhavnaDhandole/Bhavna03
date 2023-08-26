import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {
  loginForm!: FormGroup;
  endPoint!:string;
  ownerData:any;
  validUser: boolean=false;
  forgetPasswordForm!:FormGroup;
  showForgetPasswordForm: boolean = false;
  forgotPassword:boolean=false;
  userName!:string;
constructor(private router:Router,
  private fb: FormBuilder){

 }
login()
{
  this.router.navigateByUrl('');
}
back()
{
  this.router.navigateByUrl('home');
}

forgetPasswordFormDetails(){
  this.forgetPasswordForm=this.fb.group({
    newPassword:[],
    confirmPassword:[]
  })
}
forgetPassword(){
  this.showForgetPasswordForm=!this.forgetPasswordForm;
  this.forgetPasswordFormDetails();
}
}
