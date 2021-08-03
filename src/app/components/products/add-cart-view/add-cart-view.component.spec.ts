import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartViewComponent } from './add-cart-view.component';

describe('AddCartViewComponent', () => {
  let component: AddCartViewComponent;
  let fixture: ComponentFixture<AddCartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
