import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStorageComponent } from './app-storage.component';

describe('AppStorageComponent', () => {
  let component: AppStorageComponent;
  let fixture: ComponentFixture<AppStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
