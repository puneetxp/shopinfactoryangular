import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  selectProduct(){
    try {
      this.router.navigate(['/product'],{queryParams:{name:'first'}})
    } catch (error) {
      
    }
  }
}
