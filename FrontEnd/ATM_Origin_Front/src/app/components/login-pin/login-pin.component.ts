import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-login-pin',
  templateUrl: './login-pin.component.html',
  styleUrls: ['./login-pin.component.css']
})
export class LoginPinComponent implements OnInit {

  constructor(private _tarjetaService:TarjetaService,private route: ActivatedRoute,private _router: Router) { }
  position: number;
  pin:number;
  param_num_tarjeta:number;
  num_tarjeta:string;
  @ViewChild("first", { static: true }) first: ElementRef;
  @ViewChild("second", { static: true }) second: ElementRef;
  @ViewChild("third", { static: true }) third: ElementRef;
  @ViewChild("fourth", { static: true }) fourth: ElementRef;
  ngOnInit() {
    this.position = 1;
    this.route.params.subscribe(params => {
      this.num_tarjeta = params['num_tarjeta'] });
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
      console.log(
        "position is " +
          this.position +
          " " +
          "PIN is " +
          this.first.nativeElement.value +
          this.second.nativeElement.value +
          this.third.nativeElement.value +
          this.fourth.nativeElement.value
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
      console.log(
        "position is " +
          this.position +
          " " +
          "PIN is " +
          this.first.nativeElement.value +
          this.second.nativeElement.value +
          this.third.nativeElement.value +
          this.fourth.nativeElement.value
      );
    }
  }

  verificarPIN(){
    this.pin = this.first.nativeElement.value + this.second.nativeElement.value + this.third.nativeElement.value + this.fourth.nativeElement.value
    this.param_num_tarjeta = parseInt(this.num_tarjeta);
    this._tarjetaService.verificarPIN(this.param_num_tarjeta,this.pin).subscribe(data => {
      this._router.navigate(['/menu/'+ data[0].id_tarjeta]);
    })
  }
}