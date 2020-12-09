import { TestBed } from '@angular/core/testing';

import { BackendWebService } from './backend-web.service';

describe('BackendWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendWebService = TestBed.get(BackendWebService);
    expect(service).toBeTruthy();
  });
});
