import { TestBed } from '@angular/core/testing';

import { StoreApiCallServiceService } from './store-api-call.service.service';

describe('StoreApiCallServiceService', () => {
  let service: StoreApiCallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreApiCallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
