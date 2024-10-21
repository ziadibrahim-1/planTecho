import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/Authntication/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
islogin:boolean= false
constructor(public _AuthService:AuthService){
}
ngOnInit(): void {
  this._AuthService.userData.subscribe(()=>{
    if (this._AuthService.userData.getValue() != null) {
      this.islogin=true;
    }
    else{
      this.islogin=false 
    }
  })
}

}
