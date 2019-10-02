import { TestBed } from '@angular/core/testing';

import { CocktailsDataService } from './cocktails-data.service';

describe('CocktailsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailsDataService = TestBed.get(CocktailsDataService);
    expect(service).toBeTruthy();
  });
});
