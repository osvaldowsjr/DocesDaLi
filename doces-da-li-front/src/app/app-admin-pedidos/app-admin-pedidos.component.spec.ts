import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminPedidosComponent } from './app-admin-pedidos.component';

describe('AppAdminPedidosComponent', () => {
  let component: AppAdminPedidosComponent;
  let fixture: ComponentFixture<AppAdminPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
