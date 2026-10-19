import { TestBed } from '@angular/core/testing';

import { BuyerAuth } from './buyer-auth';

describe('BuyerAuth', () => {
  let service: BuyerAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
