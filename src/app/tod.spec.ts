import { TestBed } from '@angular/core/testing';

import { Tod } from './tod';

describe('Tod', () => {
  let service: Tod;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tod);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
