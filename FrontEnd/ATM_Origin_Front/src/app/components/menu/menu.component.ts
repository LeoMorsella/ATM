import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id_tarjeta:number
  constructor(private route: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id_tarjeta = params['id_tarjeta'] });
  }

  irBalance(){
    this._router.navigate(['/balance/'+ this.id_tarjeta]);
  }

  irRetiro(){
    this._router.navigate(['/retiro/'+ this.id_tarjeta]);
  }

}
