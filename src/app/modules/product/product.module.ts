import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import {RouterOutlet} from '@angular/router';
import {ProductRoutingModule} from './product-routing.module';
import {FormsModule} from '@angular/forms';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    AllProductsComponent,
    AllCategoriesComponent,
    ProductCardComponent,
    LoaderComponent,
    ManageProductComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ProductRoutingModule,
    FormsModule
  ],
  exports: []
})
export class ProductModule { }
