import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AllProductsComponent} from './pages/all-products/all-products.component';
import {AllCategoriesComponent} from './pages/all-categories/all-categories.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'all',
        component: AllProductsComponent
      },
      {
        path: 'category/all',
        component: AllCategoriesComponent
      }
    ]
  }
];
@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class ProductRoutingModule{}
