import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Retiro } from 'src/app/interfaces/retiro';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'app-retiros',
  templateUrl: './retiros.component.html',
  styleUrls: ['./retiros.component.css']
})
export class RetirosComponent implements OnInit {

  constructor(private _tarjetaService:TarjetaService,private route: ActivatedRoute,private _router: Router) { }

  id: number ;
  position: number;
  cantidad:number;
  @ViewChild("first", { static: true }) first: ElementRef;
  @ViewChild("second", { static: true }) second: ElementRef;
  @ViewChild("third", { static: true }) third: ElementRef;
  @ViewChild("fourth", { static: true }) fourth: ElementRef;

  ngOnInit(): void {
    this.position = 1;
    this.route.params.subscribe(params => {
      this.id = params['id_tarjeta'] });
  }

  enter(n: number) {
    if (this.position < 5) {
      if (this.position === 1) {
        this.first.nativeElement.value = n;
      }
      if (this.position === 2) {
        this.second.nativeElement.value = n;
      }
      if (this.position === 3) {
        this.third.nativeElement.value = n;
      }
      if (this.position === 4) {
        this.fourth.nativeElement.value = n;
      }
      this.position++;
    }
  }
  back() {
    if (this.position > 1) {
      this.position--;
      if (this.position === 1) {
        this.first.nativeElement.value = "";
      }
      if (this.position === 2) {
        this.second.nativeElement.value = "";
      }
      if (this.position === 3) {
        this.third.nativeElement.value = "";
      }
      if (this.position === 4) {
        this.fourth.nativeElement.value = "";
      }
    }
  }
  retirarDinero(){
    const retiro:Retiro = {
      id_tarjeta: this.id,
      cantidad: this.first.nativeElement.value + this.second.nativeElement.value + this.third.nativeElement.value + this.fourth.nativeElement.value
    }
    this._tarjetaService.registrarRetiro(retiro).subscribe(data=> {
    })
  }

}
