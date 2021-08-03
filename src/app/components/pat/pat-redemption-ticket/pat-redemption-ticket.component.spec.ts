import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatRedemptionTicketComponent } from './pat-redemption-ticket.component';

describe('PatRedemptionTicketComponent', () => {
  let component: PatRedemptionTicketComponent;
  let fixture: ComponentFixture<PatRedemptionTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatRedemptionTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatRedemptionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
