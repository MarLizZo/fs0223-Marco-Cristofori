import { TestBed } from '@angular/core/testing';

import { PhotointercInterceptor } from './photointerc.interceptor';

describe('PhotointercInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PhotointercInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PhotointercInterceptor = TestBed.inject(PhotointercInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
