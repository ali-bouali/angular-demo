import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './demo/login/login.component';
import {RegisterComponent} from './demo/register/register.component';
import {CalcComponent} from './demo/calc/calc.component';
import {MyFormComponent} from './demo/my-form/my-form.component';

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
    path: 'my-form',
    component: MyFormComponent
  },
  {
    path: 'my-form/:id/edit',
    component: MyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
