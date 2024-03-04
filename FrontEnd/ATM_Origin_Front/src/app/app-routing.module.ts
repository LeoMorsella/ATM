import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPinComponent } from './components/login-pin/login-pin.component';
import { LoginTarjetaComponent } from './components/login-tarjeta/login-tarjeta.component';
import { MenuComponent } from './components/menu/menu.component';
import { BalancesComponent } from './components/balances/balances.component';
import { RetirosComponent } from './components/retiros/retiros.component';

const routes: Routes = [
  { path: '', redirectTo: 'login-tarjeta', pathMatch: 'full' },
  { path:'login-tarjeta', component: LoginTarjetaComponent },
  { path:'login-pin/:num_tarjeta', component: LoginPinComponent },
  { path:'menu/:id_tarjeta', component: MenuComponent },
  { path:'balance/:id_tarjeta', component: BalancesComponent },
  { path:'retiro/:id_tarjeta', component: RetirosComponent },
  { path: '**',  redirectTo: 'login-tarjeta', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
