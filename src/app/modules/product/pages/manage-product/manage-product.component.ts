import { Component } from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product/product.service';
import {lastValueFrom} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent {

  product: Product = {};

  constructor(
    private productService: ProductService,
    private router: Router
    ) {
  }

  async save() {
    await lastValueFrom(this.productService.saveProduct(this.product));
    await this.router.navigate(['product', 'all']);
  }
}
