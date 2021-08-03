import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatContainer } from './pat.container';

describe('PatContainer', () => {
  let component: PatContainer;
  let fixture: ComponentFixture<PatContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
