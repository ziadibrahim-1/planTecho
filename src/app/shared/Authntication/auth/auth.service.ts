import {  signin, Signup, tokenData } from '../../interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Environment } from '../../../Environmet/base';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<tokenData | null>= new BehaviorSubject<tokenData|null>(null)
  constructor(private _HttpClient:HttpClient ,private _Router:Router,@Inject(PLATFORM_ID) id : object) { 
    if(isPlatformBrowser(id)){
      if (localStorage.getItem('userToken')) {
        this.decodedata()
        _Router.navigate([localStorage.getItem('currentPage')])
      }
    }
  }
  submitRegister(data:Signup):Observable<any>
  {
  return  this._HttpClient.post(`${Environment.baseUrl}api/v1/auth/signup`,data)
  }

  submitLogin(data:signin):Observable<any>{
  return this._HttpClient.post(`${Environment.baseUrl}api/v1/auth/signin`,data)
  }

  decodedata(){
    const token= JSON.stringify(localStorage.getItem('userToken'))
    const decoded = jwtDecode<tokenData>(token)
    this.userData.next(decoded)
    console.log(this.userData.getValue());
    
  }

  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
