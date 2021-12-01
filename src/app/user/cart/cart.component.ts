import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  items: Array<any> = [
    {
      product_name: 'first',
      photo: 
        {
          src : 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          alt : 'test123',
        },
      category : 'Case'
    },
    {
      product_name: 'second',
      photo: 
      {
        src : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        alt : 'test13',
      },
      category : 'Screen Guard'
    }
  ]
  suggestion: Array<any> = [
    {
      product_name: 'any'
    },
    {
      product_name: 'one'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
