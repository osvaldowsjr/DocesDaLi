import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCheckoutPageComponent } from './app-checkout-page.component';

describe('AppCheckoutPageComponent', () => {
  let component: AppCheckoutPageComponent;
  let fixture: ComponentFixture<AppCheckoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCheckoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
