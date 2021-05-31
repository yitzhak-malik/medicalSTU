import { TestBed } from '@angular/core/testing';

import { HttpServicService } from './http-servic.service';

describe('HttpServicService', () => {
  let service: HttpServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
