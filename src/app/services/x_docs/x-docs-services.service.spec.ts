import { TestBed } from '@angular/core/testing';

import { XDocsServicesService } from './x-docs-services.service';

describe('XDocsServicesService', () => {
  let service: XDocsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XDocsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
