import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTarjetaComponent } from './components/login-tarjeta/login-tarjeta.component';
import { LoginPinComponent } from './components/login-pin/login-pin.component';
import { MenuComponent } from './components/menu/menu.component';
import { BalancesComponent } from './components/balances/balances.component';
import { RetirosComponent } from './components/retiros/retiros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginTarjetaComponent,
    LoginPinComponent,
    MenuComponent,
    BalancesComponent,
    RetirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
