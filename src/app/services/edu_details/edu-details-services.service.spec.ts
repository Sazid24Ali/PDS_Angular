import { TestBed } from '@angular/core/testing';

import { EduDetailsServicesService } from './edu-details-services.service';

describe('EduDetailsServicesService', () => {
  let service: EduDetailsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EduDetailsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
