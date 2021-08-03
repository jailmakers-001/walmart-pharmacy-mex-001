import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHealthManagerViewComponent } from './report-health-manager-view.component';

describe('ReportHealthManagerViewComponent', () => {
  let component: ReportHealthManagerViewComponent;
  let fixture: ComponentFixture<ReportHealthManagerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHealthManagerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHealthManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
