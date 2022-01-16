import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { stringify } from 'querystring';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  name!: string;
  constructor(private productservice: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id: string = String(this.route.snapshot.paramMap.get('name'));
    this.productservice.getProduct(id);
  }
}
    // this.productservice.getProduct().subscribe(
    //   product => {
    //     this.product = +params.get('product');
    //   },
    //   error => this.errorMessage = <any>error
    // );