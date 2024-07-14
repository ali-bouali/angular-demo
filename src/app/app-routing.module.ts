import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './demo/login/login.component';
import {RegisterComponent} from './demo/register/register.component';
import {CalcComponent} from './demo/calc/calc.component';
import {MyFormComponent} from './demo/my-form/my-form.component';
import {MainComponent} from './demo/main/main.component';
import {SubMenuComponent} from './demo/sub-menu/sub-menu.component';
import {SubComp1Component} from './demo/sub-menu/sub-comp1/sub-comp1.component';
import {SubComp2Component} from './demo/sub-menu/sub-comp2/sub-comp2.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'main', // Main
    component: MainComponent,
    children: [
      {
        path: '',
        component: CalcComponent
      },
      {
        path: 'calc',
        component: CalcComponent
      },
      {
        path: 'my-form',
        component: MyFormComponent
      },
      {
        path: 'my-form/:id/edit',
        component: MyFormComponent
      },
      {
        path: 'my-sub-menu',
        component: SubMenuComponent,
        children: [
          {
            path: 'sub-1',
            component: SubComp1Component
          },
          {
            path: 'sub-2',
            component: SubComp2Component
          }
        ]
      }
    ]
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
