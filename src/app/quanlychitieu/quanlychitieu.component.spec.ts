import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlychitieuComponent } from './quanlychitieu.component';

describe('QuanlychitieuComponent', () => {
  let component: QuanlychitieuComponent;
  let fixture: ComponentFixture<QuanlychitieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlychitieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlychitieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
