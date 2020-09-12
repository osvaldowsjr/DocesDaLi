import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainPageCalendarComponent } from './app-main-page-calendar.component';

describe('AppMainPageCalendarComponent', () => {
  let component: AppMainPageCalendarComponent;
  let fixture: ComponentFixture<AppMainPageCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainPageCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainPageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
