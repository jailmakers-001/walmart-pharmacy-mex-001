import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiledViewComponent } from './tiled-view.component';

describe('TiledViewComponent', () => {
  let component: TiledViewComponent;
  let fixture: ComponentFixture<TiledViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiledViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
