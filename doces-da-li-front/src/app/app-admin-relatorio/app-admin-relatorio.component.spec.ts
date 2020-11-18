import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdminRelatorioComponent } from './app-admin-relatorio.component';

describe('AppAdminRelatorioComponent', () => {
  let component: AppAdminRelatorioComponent;
  let fixture: ComponentFixture<AppAdminRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAdminRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdminRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
