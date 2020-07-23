import { Router } from '@angular/router';
import { AppserviceService } from './../../appservice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
constructor(public service:AppserviceService,public fb:FormBuilder,notifierService: NotifierService,
  public router:Router
  ){
  this.notifier = notifierService;
}
public loginForm:FormGroup;
public LoginClicked=false;
public  notifier: NotifierService;
  ngOnInit() {
  this.loginForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
  }

  login(){
   this.LoginClicked=true;


   let x={
    email:this.loginForm.controls['email'].value,
     password:this.loginForm.controls['password'].value
   }
  this.service.login(x).subscribe((res:any)=>{
    this.LoginClicked=false;
    console.log(res);
    if(res.status==true){
      this.router.navigate(['/dashboard/Commoditise'])
    }
    else{
  this.notifier.show('s')
    }
  })

  }
}
