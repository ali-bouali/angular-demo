import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './demo/login/login.component';
import {RegisterComponent} from './demo/register/register.component';
import {CalcComponent} from './demo/calc/calc.component';

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
    path: 'calc',
    component: CalcComponent
  },
  {
    path: 'new-link/clicked',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
