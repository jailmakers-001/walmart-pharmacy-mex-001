import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatViewListComponent } from './pat-view-list.component';

describe('PatViewListComponent', () => {
  let component: PatViewListComponent;
  let fixture: ComponentFixture<PatViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
