import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatScanTicketComponent } from './pat-scan-ticket.component';

describe('PatScanTicketComponent', () => {
  let component: PatScanTicketComponent;
  let fixture: ComponentFixture<PatScanTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatScanTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatScanTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
