import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerAnimationComponent } from './scanner-animation.component';

describe('ScannerAnimationComponent', () => {
  let component: ScannerAnimationComponent;
  let fixture: ComponentFixture<ScannerAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
