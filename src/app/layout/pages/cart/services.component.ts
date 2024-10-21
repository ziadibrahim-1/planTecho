import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './Cart.component.html',
  styleUrl: './Cart.component.scss'
})
export class CartComponent implements OnInit{
  ngOnInit(): void {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('currentPage','/Cart')
    }
  }
}
