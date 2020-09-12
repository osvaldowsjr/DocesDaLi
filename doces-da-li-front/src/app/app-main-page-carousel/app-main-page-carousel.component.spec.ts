import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainPageCarouselComponent } from './app-main-page-carousel.component';

describe('AppMainPageCarouselComponent', () => {
  let component: AppMainPageCarouselComponent;
  let fixture: ComponentFixture<AppMainPageCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMainPageCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainPageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
