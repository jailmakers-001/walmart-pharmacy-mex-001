import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegateViewComponent } from './negate-view.component';

describe('NegateViewComponent', () => {
  let component: NegateViewComponent;
  let fixture: ComponentFixture<NegateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
