import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/Authntication/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(60)]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z](?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword:new FormControl(null , [Validators.required ]),
  }, {validators:this.checkRepasswordMatch})

  errMes!:string
  isloding!:Boolean
    constructor(private _AuthService:AuthService,private _Router:Router){}
  checkRepasswordMatch(g:AbstractControl){
    if(g.get('password')?.value === g.get('password_confirmation')?.value){
      return null
    }
    else{
      g.get('password_confirmation')?.setErrors({mismatch:true})
      return {mismatch:true}
    }
  }
 
  submitRegister(){

    if(this.registerForm.valid){
      this.isloding=true
      this._AuthService.submitRegister(this.registerForm.value).subscribe({
        next:(res)=>{
          this._Router.navigate(['/login'])
          this.isloding=false
        },
        error:(error)=>{
          this.isloding=false
          this.errMes=error.error.message
        }
      })
    }
    console.log(this.registerForm.get('name')?.errors);
    
  }
}
