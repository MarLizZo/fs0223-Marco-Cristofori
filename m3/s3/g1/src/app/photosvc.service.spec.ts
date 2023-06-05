import { TestBed } from '@angular/core/testing';

import { PhotosvcService } from './photosvc.service';

describe('PhotosvcService', () => {
  let service: PhotosvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
