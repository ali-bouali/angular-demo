import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './demo/my-first/my-first.component';
import { CalcComponent } from './demo/calc/calc.component';
import {FormsModule} from '@angular/forms';
import {CalculatorService} from './demo/services/calculator/calculator.service';
import { LoginComponent } from './demo/login/login.component';
import { RegisterComponent } from './demo/register/register.component';
import { DashboardComponent } from './demo/dashboard/dashboard.component';
import { MenuComponent } from './demo/menu/menu.component';
import { MyFormComponent } from './demo/my-form/my-form.component';
import { MainComponent } from './demo/main/main.component';
import { SubMenuComponent } from './demo/sub-menu/sub-menu.component';
import { SubComp1Component } from './demo/sub-menu/sub-comp1/sub-comp1.component';
import { SubComp2Component } from './demo/sub-menu/sub-comp2/sub-comp2.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [ // ndeclari les composants mte3i hna
        AppComponent, MyFirstComponent, CalcComponent, LoginComponent, RegisterComponent, DashboardComponent, MenuComponent, MyFormComponent, MainComponent, SubMenuComponent, SubComp1Component, SubComp2Component
    ],
    imports: [ // na3mel import l ayy module nest7a99ou
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    // lazemni n7ott les services elli mahomech privded in root
    providers: [
        CalculatorService,
        HttpClient
    ],
  exports: [
    MenuComponent,
    LoginComponent
  ],
    // l composant el kbir elli bech ndemarri bih l application
    bootstrap: [AppComponent]
})
export class AppModule { }
