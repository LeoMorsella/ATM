import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTarjetaComponent } from './login-tarjeta.component';

describe('LoginTarjetaComponent', () => {
  let component: LoginTarjetaComponent;
  let fixture: ComponentFixture<LoginTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
