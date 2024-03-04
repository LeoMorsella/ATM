import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarjeta } from '../interfaces/tarjeta';
import { Balance } from '../interfaces/balance';
import { Retiro } from '../interfaces/retiro';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  myAppUrl: string = environment.endpoint;
  myApiUrl: string = 'api/Tarjeta/';


  constructor(private http: HttpClient) { }

  getTarjeta(id_tarjeta: number): Observable<Tarjeta> {
    return this.http.get<Tarjeta>(`${this.myAppUrl}${this.myApiUrl}${id_tarjeta}`);
  }

  verificarTarjeta(num_tarjeta: number): Observable<Array<Tarjeta>> {
    return this.http.get<Array<Tarjeta>>(`${this.myAppUrl}${this.myApiUrl}${num_tarjeta}/verificarTarjeta`)
  }

  verificarPIN(num_tarjeta: number, PIN: number): Observable<Array<Tarjeta>> {
    return this.http.get<Array<Tarjeta>>(`${this.myAppUrl}${this.myApiUrl}${num_tarjeta}/${PIN}/verificarPIN`)
  }

  generarBalance(balance:Balance): Observable<Balance>{
    return this.http.post<Balance>(`${this.myAppUrl}${this.myApiUrl}RegistrarBalance`,balance);
  }

  registrarRetiro(retiro:Retiro): Observable<Retiro>{
    return this.http.post<Retiro>(`${this.myAppUrl}${this.myApiUrl}RegistrarBalance`,retiro);
  }

}
