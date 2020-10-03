import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminIngredientsComponent } from './app-admin-ingredients.component';

describe('AppAdminIngredientsComponent', () => {
  let component: AppAdminIngredientsComponent;
  let fixture: ComponentFixture<AppAdminIngredientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminIngredientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
