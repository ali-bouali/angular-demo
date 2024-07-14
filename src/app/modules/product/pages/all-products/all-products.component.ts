import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];
  isLoading = false;

  constructor(
    private productService: ProductService
  ) {
  }


  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.productService.getAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
          this.isLoading = false;
        }
      });
  }

}
