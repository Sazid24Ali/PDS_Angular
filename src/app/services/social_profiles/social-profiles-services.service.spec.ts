import { TestBed } from '@angular/core/testing';

import { SocialProfilesServicesService } from './social-profiles-services.service';

describe('SocialProfilesServicesService', () => {
  let service: SocialProfilesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialProfilesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
