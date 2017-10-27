import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxbSelect2TestComponent } from './ngxb-select2-test.component';

describe('NgxbSelectTestComponent', () => {
  let component: NgxbSelect2TestComponent;
  let fixture: ComponentFixture<NgxbSelect2TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxbSelect2TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxbSelect2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
