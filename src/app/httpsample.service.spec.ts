import { TestBed, inject } from '@angular/core/testing';

import { HttpsampleService } from './httpsample.service';

describe('HttpsampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpsampleService]
    });
  });

  it('should be created', inject([HttpsampleService], (service: HttpsampleService) => {
    expect(service).toBeTruthy();
  }));
});
