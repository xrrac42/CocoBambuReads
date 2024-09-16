import { TestBed } from '@angular/core/testing';

import { FavoritesBookService } from './favorites-book.service';

describe('FavoritesBookService', () => {
  let service: FavoritesBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
