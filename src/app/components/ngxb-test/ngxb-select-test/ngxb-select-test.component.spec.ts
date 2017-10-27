import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxbSelectTestComponent } from './ngxb-select-test.component';

describe('NgxbSelectTestComponent', () => {
  let component: NgxbSelectTestComponent;
  let fixture: ComponentFixture<NgxbSelectTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxbSelectTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxbSelectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
