import { TestBed } from '@angular/core/testing';

import { NoStoreGuard } from './no-store.guard';

describe('NoStoreGuard', () => {
  let guard: NoStoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoStoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
