import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatManualTicketComponent } from './pat-manual-ticket.component';

describe('PatManualTicketComponent', () => {
  let component: PatManualTicketComponent;
  let fixture: ComponentFixture<PatManualTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatManualTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatManualTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
