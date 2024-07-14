import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Product} from '../../models/product';
import {lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(
    private productService: ProductService
  ) {}


  async ngOnInit(): Promise<void> {
    /*this.productService.getAllProducts()
      .subscribe({
        next: (products) => {
          this.products = products;
          console.log('Jetni reponse me API');
          // console.log(products);
        }
      });*/
    console.log('9bal');
    // bech n7awel observable l promise nesta3mel lastValueFrom()
    // najem na3mel await bech nestanna reponse mel Promise
    // await ==> ta3mel blocage lel appel ==> ma najemech net3adda lel code elli ba3dou ella ma tarja3 reponse
    // this.products = await lastValueFrom(this.productService.getAllProducts());

    // najem na3mel appel lel promise w ba3ed nconsommi reponse fel methode then()
    // then() ==> ta9riban tekhdem kima l subscribe fel observable
    lastValueFrom(this.productService.getAllProducts())
      .then(p => {
        console.log('promise rajj3et rep');
      });
    console.log("za3ma nestannou berrasmi??");
    console.log('ye5i nestannou fe rep mel observable wella la?');
    // some other code
  }

}
