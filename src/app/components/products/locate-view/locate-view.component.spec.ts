import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateViewComponent } from './locate-view.component';

describe('LocateViewComponent', () => {
  let component: LocateViewComponent;
  let fixture: ComponentFixture<LocateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
