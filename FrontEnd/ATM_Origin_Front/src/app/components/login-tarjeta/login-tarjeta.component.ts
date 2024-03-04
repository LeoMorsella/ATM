import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-login-tarjeta',
  templateUrl: './login-tarjeta.component.html',
  styleUrls: ['./login-tarjeta.component.css']
})
export class LoginTarjetaComponent implements OnInit {
  constructor(private _tarjetaService:TarjetaService, private _router: Router) { }
  num_tarjeta: number;
  position: number;
  @ViewChild("first", { static: true }) first: ElementRef;
  @ViewChild("second", { static: true }) second: ElementRef;
  @ViewChild("third", { static: true }) third: ElementRef;
  @ViewChild("fourth", { static: true }) fourth: ElementRef;
  @ViewChild("fifth", { static: true }) fifth: ElementRef;
  @ViewChild("sixth", { static: true }) sixth: ElementRef;
  @ViewChild("seventh", { static: true }) seventh: ElementRef;
  @ViewChild("eighth", { static: true }) eighth: ElementRef;
  @ViewChild("ninth", { static: true }) ninth: ElementRef;
  @ViewChild("tenth", { static: true }) tenth: ElementRef;
  @ViewChild("eleventh", { static: true }) eleventh: ElementRef;
  @ViewChild("twelfth", { static: true }) twelfth: ElementRef;
  @ViewChild("thirteenth", { static: true }) thirteenth: ElementRef;
  @ViewChild("fouteenth", { static: true }) fouteenth: ElementRef;
  @ViewChild("fifteenth", { static: true }) fifteenth: ElementRef;
  @ViewChild("sixteenth", { static: true }) sixteenth: ElementRef;
  ngOnInit() {
    this.position = 1;
  }enter(n: number) {
    if (this.position < 17) {
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
      if (this.position === 4) {
        this.fourth.nativeElement.value = n;
      }
      if (this.position === 5) {
        this.fifth.nativeElement.value = n;
      }
      if (this.position === 6) {
        this.sixth.nativeElement.value = n;
      }
      if (this.position === 7) {
        this.seventh.nativeElement.value = n;
      }
      if (this.position === 8) {
        this.eighth.nativeElement.value = n;
      }
      if (this.position === 9) {
        this.ninth.nativeElement.value = n;
      }
      if (this.position === 10) {
        this.tenth.nativeElement.value = n;
      }
      if (this.position === 11) {
        this.eleventh.nativeElement.value = n;
      }
      if (this.position === 12) {
        this.twelfth.nativeElement.value = n;
      }
      if (this.position === 13) {
        this.thirteenth.nativeElement.value = n;
      }
      if (this.position === 14) {
        this.fouteenth.nativeElement.value = n;
      }
      if (this.position === 15) {
        this.fifteenth.nativeElement.value = n;
      }
      if (this.position === 16) {
        this.sixteenth.nativeElement.value = n;
      }
      
      this.position++;
      console.log(
        "position is " +
          this.position +
          " " +
          "Numero de Tarjeta es " +
          this.first.nativeElement.value +
          this.second.nativeElement.value +
          this.third.nativeElement.value +
          this.fourth.nativeElement.value +
          this.fifth.nativeElement.value +
          this.sixth.nativeElement.value +
          this.seventh.nativeElement.value +
          this.eighth.nativeElement.value +
          this.ninth.nativeElement.value +
          this.tenth.nativeElement.value +
          this.eleventh.nativeElement.value +
          this.twelfth.nativeElement.value +
          this.thirteenth.nativeElement.value +
          this.fouteenth.nativeElement.value +
          this.fifteenth.nativeElement.value +
          this.sixteenth.nativeElement.value 
      );
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
      if (this.position === 5) {
        this.fifth.nativeElement.value = "";
      }
      if (this.position === 6) {
        this.sixth.nativeElement.value = "";
      }
      if (this.position === 7) {
        this.seventh.nativeElement.value = "";
      }
      if (this.position === 8) {
        this.eighth.nativeElement.value = "";
      }
      if (this.position === 9) {
        this.ninth.nativeElement.value = "";
      }
      if (this.position === 10) {
        this.tenth.nativeElement.value = "";
      }
      if (this.position === 11) {
        this.eleventh.nativeElement.value = "";
      }
      if (this.position === 12) {
        this.twelfth.nativeElement.value = "";
      }
      if (this.position === 13) {
        this.thirteenth.nativeElement.value = "";
      }
      if (this.position === 14) {
        this.fouteenth.nativeElement.value = "";
      }
      if (this.position === 15) {
        this.fifteenth.nativeElement.value = "";
      }
      if (this.position === 16) {
        this.sixteenth.nativeElement.value = "";
      }
      console.log(
        "position is " +
          this.position +
          " " +
          "Numero de Tarjeta is " +
          this.first.nativeElement.value +
          this.second.nativeElement.value +
          this.third.nativeElement.value +
          this.fourth.nativeElement.value +
          this.fifth.nativeElement.value +
          this.sixth.nativeElement.value +
          this.seventh.nativeElement.value +
          this.eighth.nativeElement.value +
          this.ninth.nativeElement.value +
          this.tenth.nativeElement.value +
          this.eleventh.nativeElement.value +
          this.twelfth.nativeElement.value +
          this.thirteenth.nativeElement.value +
          this.fouteenth.nativeElement.value +
          this.fifteenth.nativeElement.value +
          this.sixteenth.nativeElement.value 
      );
    }
  }

  verificarTarjeta(){

    this.num_tarjeta = this.first.nativeElement.value +
    this.second.nativeElement.value +
    this.third.nativeElement.value +
    this.fourth.nativeElement.value +
    this.fifth.nativeElement.value +
    this.sixth.nativeElement.value +
    this.seventh.nativeElement.value +
    this.eighth.nativeElement.value +
    this.ninth.nativeElement.value +
    this.tenth.nativeElement.value +
    this.eleventh.nativeElement.value +
    this.twelfth.nativeElement.value +
    this.thirteenth.nativeElement.value +
    this.fouteenth.nativeElement.value +
    this.fifteenth.nativeElement.value +
    this.sixteenth.nativeElement.value 
    this._tarjetaService.verificarTarjeta(this.num_tarjeta).subscribe(data => {
      this._router.navigate(['/login-pin/'+ this.num_tarjeta]);
    })
  }
}
