import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/Authntication/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
signInForm:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required ,  Validators.pattern(/^[A-Z](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
})
isloading!:boolean
errMsg!:string

constructor(private _AuthService:AuthService,private _Router:Router){

}

signin(){
  if(this.signInForm.valid){
    this.isloading=true
    this._AuthService.submitLogin(this.signInForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        
        this.isloading=false
        localStorage.setItem('userToken',res.token)
        this._AuthService.decodedata()
        this._Router.navigate(['/home'])
        
      },
      error:(error)=>{
        this.errMsg=error.error.message
        this.isloading=false
      }
    })
  }
}
}
