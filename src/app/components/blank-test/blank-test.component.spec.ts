import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankTestComponent } from './blank-test.component';

describe('BlankTestComponent', () => {
  let component: BlankTestComponent;
  let fixture: ComponentFixture<BlankTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
