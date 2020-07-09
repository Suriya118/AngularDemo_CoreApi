import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../Api/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  constructor(public ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.getProduct().subscribe((data: {}) => {
      console.log(data);
    });
  }
}
