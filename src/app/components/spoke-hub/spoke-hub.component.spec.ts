import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpokeHubComponent } from './spoke-hub.component';

describe('SpokeHubComponent', () => {
  let component: SpokeHubComponent;
  let fixture: ComponentFixture<SpokeHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpokeHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpokeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
