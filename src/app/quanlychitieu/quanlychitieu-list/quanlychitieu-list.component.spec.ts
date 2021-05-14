import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlychitieuListComponent } from './quanlychitieu-list.component';

describe('QuanlychitieuListComponent', () => {
  let component: QuanlychitieuListComponent;
  let fixture: ComponentFixture<QuanlychitieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlychitieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlychitieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
