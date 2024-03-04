import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { Balance } from 'src/app/interfaces/balance';
import { Tarjeta } from 'src/app/interfaces/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {


  constructor(private _tarjetaService:TarjetaService,private route: ActivatedRoute,private _router: Router) { }
  id: number ;
  tarjeta!: Tarjeta;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id_tarjeta'] });
    
    this.obtenerTarjeta();
  }

  obtenerTarjeta() {
    this._tarjetaService.getTarjeta(this.id).subscribe(data=>{
      this.tarjeta = data;
    }) 
    this.generarBalance()
  }

  generarBalance(){
    const balance:Balance = {
      id_tarjeta: this.id
    }
    this._tarjetaService.generarBalance(balance).subscribe(data=> {
      console.log(data)
    })
  }

  volverMenu(){
    this._router.navigate(['/menu/'+ this.id]);
  }
  
}
