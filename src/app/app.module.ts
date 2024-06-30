import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './demo/my-first/my-first.component';
import { CalcComponent } from './demo/calc/calc.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ // ndeclari les composants mte3i hna
    AppComponent, MyFirstComponent, CalcComponent
  ],
  imports: [ // na3mel import l ayy module nest7a99ou
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // lazemni n7ott les services elli mahomech privded in root
  providers: [],
  // l composant el kbir elli bech ndemarri bih l application
  bootstrap: [AppComponent]
})
export class AppModule { }
