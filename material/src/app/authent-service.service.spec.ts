import { TestBed } from '@angular/core/testing';

import { AuthentServiceService } from './authent-service.service';

describe('AuthentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthentServiceService = TestBed.get(AuthentServiceService);
    expect(service).toBeTruthy();
  });
});
